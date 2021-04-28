import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Viewport from '../../components/Viewport'

export default function Layout() {
  return (
    <Viewport>
      <Container>
        <Row>
          <Col sm={12}>
            <div className="header mb-5">
              <h1 className="text-white bz-primary pl-3 pb-2 rounded">Layout</h1>
            </div>
          </Col>
          <Col sm={6}>
            <img src="images/layout1.png" alt="progress" className="img-fluid" />
          </Col>
          <Col sm={6}>
            <img src="images/layout2.png" alt="dialog progress" className="img-fluid shadow mb-5" />
          </Col>
        </Row>
      </Container>
    </Viewport>
  )
}
