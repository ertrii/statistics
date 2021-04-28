import { Bar, ChartData } from 'react-chartjs-2'
import hours from '../../utils/hours'

function getBg(quantity = 1, i = 0) {
  const bgColor: Array<string> = []
  for (let index = 0; index < quantity; index++) {
    switch (i) {
      case 0:
        bgColor.push('rgba(228, 79, 72, 0.7)')
        break
      case 1:
        bgColor.push('rgba(0, 175, 128, 0.7)')
        break
      case 2:
        bgColor.push('rgba(251, 179, 71, 0.7)')
        break
    }
  }
  return bgColor
}

function getborderColor(quantity = 1, i = 0) {
  const borderColor: Array<string> = []
  for (let index = 0; index < quantity; index++) {
    switch (i) {
      case 0:
        borderColor.push('#E44F48')
        break
      case 1:
        borderColor.push('#00AF80')
        break
      case 2:
        borderColor.push('#FBB347')
        break
    }
  }
  return borderColor
}

function datasets(data: Record<string, Record<string, number>>) {
  const sets: Chart.ChartDataSets[] = []
  const quantity = Object.values(data).length
  const labels: Array<string> = []
  const values: Array<Array<number>> = []

  for (const key in data) {
    const set = data[key]
    for (const label in set) {
      if (!labels.includes(label)) {
        labels.push(label)
      }
    }
  }

  labels.forEach(function () {
    values.push([])
  })

  labels.forEach(function (_, index) {
    for (const key in data) {
      const value: number = Object.values(data[key])[index]
      values[index].push(value)
    }
  })

  labels.forEach(function (label, index) {
    const set_values = values[index]
    sets.push({
      label,
      backgroundColor: getBg(quantity, index),
      borderColor: getborderColor(quantity, index),
      borderWidth: 3,
      data: set_values,
    })
  })
  return sets
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

export interface BarChartProps {
  data: Record<string, Record<string, number>>
}

export default function BarChart(props: BarChartProps) {
  const labels: Array<string> = []
  for (const key in props.data) {
    labels.push(key)
  }
  const data: ChartData<Chart.ChartData> = {
    labels,
    datasets: datasets(props.data),
  }
  return <Bar data={data} options={options} />
}
