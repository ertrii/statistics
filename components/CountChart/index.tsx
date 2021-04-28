import * as React from 'react'
import PropTypes from 'prop-types'

export interface PropsCountChart {
  number: number
  color: 'danger' | 'success' | 'warning'
}

const colors = {
  danger: '#E44F48',
  success: '#00AF80',
  warning: '#FBB347',
}

export default function CountChart(props: PropsCountChart) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="110">
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="transparent"
        strokeWidth="10"
        stroke={colors[props.color]}
      />
      <text
        fill={colors[props.color]}
        x="50"
        y="60"
        textAnchor="middle"
        fontSize="28"
        fontWeight="bold"
      >
        {props.number}
      </text>
    </svg>
  )
}

CountChart.propTypes = {
  number: PropTypes.number.isRequired,
  color: PropTypes.oneOf(['danger', 'success', 'warning']),
}

CountChart.defaultProps = {
  color: 'success',
}
