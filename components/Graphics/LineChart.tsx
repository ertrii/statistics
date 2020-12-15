import { Line } from 'react-chartjs-2'

export default function LineChart() {
  const datasets: Chart.ChartDataSets[] = [
    {
      label: '# of Votes',
      data: [1, 12, 19, 3, 5, 2, 3],
      fill: true,
      backgroundColor: 'rgb(53, 105, 253)',
      borderColor: 'rgba(53, 105, 253, 0.2)',
      borderWidth: 10,
    },
  ]

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

  const labels = ['1', '2', '3', '4', '5', '6']

  return (
    <div>
      <Line data={{ datasets, labels }} options={options} />
    </div>
  )
}
