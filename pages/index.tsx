import { Row, Col } from 'react-bootstrap'
import FilterGraphics from '../components/Filtros/FilterGraphics'
import BarChart from '../components/Graphics/BarChart'
import LineChart from '../components/Graphics/LineChart'
import PieChart from '../components/Graphics/PieChart'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Row>
        <Col sm={4}>
          <FilterGraphics />
        </Col>
        <Col sm={8}>
          <LineChart />
          <PieChart />
          <BarChart />
        </Col>
      </Row>
    </Layout>
  )
}
