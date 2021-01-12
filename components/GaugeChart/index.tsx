import React from 'react'
import PropTypes from 'prop-types'
import createChart, { clearChart } from './createChart'

export interface PropsGaugeChart {
  data: any
}

export default function GaugeChart(props: PropsGaugeChart) {
  const ref: React.RefObject<HTMLDivElement> = React.createRef()
  React.useEffect(() => {
    createChart(ref, props.data)

    return () => {
      clearChart(ref)
    }
  }, [])

  return <div ref={ref} />
}

GaugeChart.propTypes = {
  id: PropTypes.string,
  data: PropTypes.object,
}
