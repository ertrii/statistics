import { Line } from 'react-chartjs-2'

export default function LineChart() {
  const datasets: Chart.ChartDataSets[] = [
    {
      label: '# of Votes',
      data: [1, 12, 19, 3, 5, 2, 3],
      fill: true,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
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

  return (
    <div>
      <Line data={{ datasets, labels: ['1', '2', '3', '4', '5', '6'] }} options={options} />
    </div>
  )
}
