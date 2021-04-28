import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Viewport from '../../components/Viewport'

export default function ERPWebComponents() {
  return (
    <Viewport>
      <Container>
        <Row>
          <Col sm={12}>
            <div className="header mb-5">
              <h1 className="text-white bz-primary pl-3 pb-2 rounded">ERP Web Components</h1>
            </div>
            <p>
              Se retomo el sistema de componentes. La idea es que sea configurable y reusable en
              otro proyectos, no solo en ERP.
            </p>
          </Col>
          <Col sm={12}>
            <img src="images/web-components.png" alt="web-components" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Viewport>
  )
}
