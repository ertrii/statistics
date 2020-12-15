import BarChart from '../components/Graphics/BarChart'
import LineChart from '../components/Graphics/LineChart'
import PieChart from '../components/Graphics/PieChart'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <LineChart />
      <BarChart />
      <PieChart />
    </Layout>
  )
}
