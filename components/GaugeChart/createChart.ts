import React from 'react'
import * as d3 from 'd3'

export default function createChart(ref: React.RefObject<HTMLDivElement>, data: any) {
  clearChart(ref)
  const el = d3.select(ref.current)
  const width: number = 450
  const height: number = 450
  const radius = Math.min(width, height) / 2
  console.log(radius, data)

  const svg = el.append('svg')
  svg.attr('width', width)
  svg.attr('height', height)

  svg.append('rect').attr('width', width).attr('height', height).attr('fill', '#fcfcfc')
  const chart = svg.append('g').attr('x', 10).attr('y', 10)

  const arc = d3.arc()

  const d: string =
    arc({
      innerRadius: 240,
      outerRadius: 250,
      startAngle: 0,
      endAngle: 2,
    }) || ''
  chart.append('path').attr('d', d).attr('fill', 'red')

  // chart.append(arc)
}

export function clearChart(ref: React.RefObject<HTMLDivElement>) {
  while (ref.current?.firstChild) {
    if (ref.current.lastChild) {
      ref.current.removeChild(ref.current.lastChild)
    }
  }
}
