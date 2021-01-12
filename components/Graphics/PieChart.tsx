import { Pie } from 'react-chartjs-2'
import PropTypes from 'prop-types'
import { PropsGraphics } from './Graphics.interface'

export default function PieChart({ data }: PropsGraphics) {
  const datasets: Chart.ChartDataSets[] = [
    {
      label: '# of Votes',
      data,
      backgroundColor: [
        '#003f5c',
        '#2f4b7c',
        '#d45087',
        '#a05195',
        '#ff7c43',
        '#f95d6a',
        '#ffa600',
        '#665191',
      ],
    },
  ]
  return (
    <Pie
      data={{
        labels: ['asfas', 'asfas'],
        datasets,
      }}
      options={{
        maintainAspectRatio: true,
      }}
    />
  )
}

PieChart.propTypes = {
  data: PropTypes.object.isRequired,
}
