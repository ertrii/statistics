import * as React from 'react'
import { HorizontalBar } from 'react-chartjs-2'
import PropTypes from 'prop-types'

function getData(data: number[], labels: string[]) {
  return {
    labels,
    datasets: [
      {
        label: 'Puntos de error (1 - 10)',
        data,
        backgroundColor: [
          'rgba(228, 79, 72, 0.7)',
          'rgba(228, 79, 72, 0.7)',
          'rgba(228, 79, 72, 0.7)',
          'rgba(228, 79, 72, 0.7)',
          'rgba(228, 79, 72, 0.7)',
          'rgba(228, 79, 72, 0.7)',
          'rgba(228, 79, 72, 0.7)',
          'rgba(228, 79, 72, 0.7)',
          'rgba(228, 79, 72, 0.7)',
          'rgba(228, 79, 72, 0.7)',
          'rgba(0, 175, 128, 0.7)',
          'rgba(228, 79, 72, 0.7)',
          'rgba(228, 79, 72, 0.7)',
        ],
        borderColor: [
          '#E44F48',
          '#E44F48',
          '#E44F48',
          '#E44F48',
          '#E44F48',
          '#E44F48',
          '#E44F48',
          '#E44F48',
          '#E44F48',
          '#E44F48',
          '#00AF80',
          '#E44F48',
          '#E44F48',
        ],
        borderWidth: 3,
      },
    ],
  }
}

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

export default function HorizontalChart(props: { data: number[]; labels: string[] }) {
  return <HorizontalBar data={getData(props.data, props.labels)} options={options} />
}

HorizontalChart.propTypes = {
  data: PropTypes.array,
  labels: PropTypes.array,
}
