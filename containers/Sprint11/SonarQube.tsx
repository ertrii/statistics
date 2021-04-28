import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Viewport from '../../components/Viewport'

export default function SonarQube() {
  return (
    <Viewport>
      <Container>
        <Row>
          <Col sm={6}>
            <div className="header mb-5">
              <h1 className="text-white bz-primary pl-3 pb-2 rounded">SonarQube</h1>
            </div>
          </Col>
          <Col sm={12}>
            <h2>Antes</h2>
            <img src="images/sonarqube1.png" alt="sonarqube1" className="img-fluid shadow mb-5" />
          </Col>
          <Col sm={12}>
            <h2>Ahora</h2>
            <img src="images/sonarqube2.png" alt="sonarqube2" className="img-fluid shadow" />
          </Col>
        </Row>
      </Container>
    </Viewport>
  )
}
