import { Bar } from 'react-chartjs-2'

const data = {
  labels: ['Sesión', 'SelectField', 'Lista de requisiciones', 'DatePicker'],
  datasets: [
    {
      label: 'Técnico',
      data: [5, 2, 11, 1],
      backgroundColor: [
        'rgba(228, 79, 72, 0.7)',
        'rgba(228, 79, 72, 0.7)',
        'rgba(228, 79, 72, 0.7)',
        'rgba(228, 79, 72, 0.7)',
      ],
      borderColor: ['#E44F48', '#E44F48', '#E44F48', '#E44F48'],
      borderWidth: 3,
    },
    {
      label: 'Documentación',
      data: [0, 0, 1, 0],
      backgroundColor: [
        'rgba(0, 175, 128, 0.7)',
        'rgba(0, 175, 128, 0.7)',
        'rgba(0, 175, 128, 0.7)',
      ],
      borderColor: ['#00AF80', '#00AF80', '#00AF80', '#00AF80'],
      borderWidth: 3,
    },
    {
      label: 'Backend',
      data: [0, 0, 4, 0],
      backgroundColor: [
        'rgba(251, 179, 71, 0.7)',
        'rgba(251, 179, 71, 0.7)',
        'rgba(251, 179, 71, 0.7)',
        'rgba(251, 179, 71, 0.7)',
      ],
      borderColor: ['#FBB347', '#FBB347', '#FBB347', '#FBB347'],
      borderWidth: 3,
    },
  ],
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

const BarChart = () => (
  <>
    <Bar data={data} options={options} />
  </>
)

export default BarChart
