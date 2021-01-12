import * as React from 'react'
import Viewport from '../../components/Viewport'
import { Col, Container, Row } from 'react-bootstrap'

export default function Slide5() {
  return (
    <Viewport>
      <Container>
        <Row>
          <Col sm={5}>
            <div className="header mb-5">
              <h1 className="title shadow text-white bz-primary pl-3 pb-2 rounded">
                Investigaciones
              </h1>
            </div>
          </Col>
          <Col sm={7}>ggsdg</Col>
        </Row>
      </Container>
    </Viewport>
  )
}
