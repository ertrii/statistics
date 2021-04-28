import * as React from 'react'
import Viewport from '../../components/Viewport'
import { Col, Container, Row } from 'react-bootstrap'

export default function Diagrams() {
  return (
    <Viewport>
      <Container>
        <Row>
          <Col sm={12}>
            <div className="header mb-5">
              <h1 className="title shadow text-white bz-primary pl-3 pb-2 rounded">
                Diagrama de Componentes
              </h1>
            </div>
            <img style={{ width: '100%' }} src="images/diagrams_components.png" alt="" />
          </Col>
        </Row>
      </Container>
    </Viewport>
  )
}
