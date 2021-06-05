<template>
  <div>
    <div
      class="w-full h-full overflow-visible"
      ref="resizeRef"
    >
      <svg
        class="indicator-circle "
        version="1.1"
        ref="svgTag"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <circle
            cx="50%"
            cy="50%"
            r="45"
            class="fill-current text-text-purple"
          />
        </g>
        <g />
        <g>
          <path
            stroke-linejoin="round"
            outer-path
            class="fill-current text-sidebar-circleOutline"
            id="#outer-path"
          />
        </g>
      </svg>
    </div>
  </div>
</template>
<script>
import * as d3 from 'd3'
import { onMounted, ref, watchEffect } from 'vue'
import useResizeObserver from '../use/resizeObserver'
import 'firebase/storage'

const options = {
  progressThickness: 16,
  padding: 0,
  iconPadding: 35
}

function convertToRads (angle) {
  return angle * (Math.PI / 180)
}

function findDegress (percentage) {
  return 360 * percentage
}

function getArcValues (index, radius, spacing) {
  return {
    innerRadius: (index + spacing) * radius,
    outerRadius: (index + spacing) * radius
  }
}

let oldProgress = 0

export default {
  props: ['progress', 'iconPath'],
  setup (props) {
    const svgTag = ref(null)
    const { resizeRef, resizeState } = useResizeObserver()
    onMounted(() => {
      const svg = d3.select(svgTag.value)
      watchEffect(async () => {
        const { width, height } = resizeState.dimensions
        svg.attr('width', width).attr('height', width)
        svg.select('g').select('circle').attr('r', (width / 2) - options.progressThickness - options.padding)

        const arc = d3.arc()
          .cornerRadius(999)

        const arcObjStart = {
          innerRadius: width / 2 - options.progressThickness,
          outerRadius: width / 2,
          startAngle: 0,
          endAngle: Math.PI * oldProgress * 2
        }

        const arcObjStop = {
          innerRadius: width / 2 - options.progressThickness,
          outerRadius: width / 2,
          startAngle: 0,
          endAngle: Math.PI * props.progress * 2
        }

        oldProgress = props.progress

        svg.select('g:nth-child(3)')
          .attr('transform', `translate(${width / 2}, ${width / 2})`)
          .select('path')
          .attr('d', arc(arcObjStart))
          .transition()
          .delay(400)
          .duration(1000)
          .attrTween('d', () => (t) => {
            const interpolator = d3.interpolateObject(arcObjStart, arcObjStop)
            return arc(interpolator(t))
          })

        const hand = await d3.svg(props.iconPath)
        const s = new XMLSerializer()
        const icon = svg.select('g:nth-child(2)')
        icon.html(s.serializeToString(hand))
        const iconSize = width - options.progressThickness * 2 - options.padding * 2 - options.iconPadding
        icon.select('svg')
          .attr('width', iconSize)
          .attr('height', iconSize)
          .attr('transform', `translate(${(width - iconSize) / 2}, ${(width - iconSize) / 2})`)
      })
    })

    return {
      actualFormatted: 100,
      resizeRef,
      svgTag
    }
  }
}
</script>
