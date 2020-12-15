import { Row, Col } from 'react-bootstrap'
import FilterGraphics from '../components/Filtros/FilterGraphics'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Row>
        <Col sm={4}>
          <FilterGraphics />
        </Col>
        <Col sm={8}>asfasf</Col>
      </Row>
    </Layout>
  )
}
