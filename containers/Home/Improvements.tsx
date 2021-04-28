import * as React from 'react'
import Viewport from '../../components/Viewport'
import { Col, Container, Row } from 'react-bootstrap'

export default function Improvements() {
  return (
    <Viewport>
      <Container>
        <Row>
          <Col sm={12}>
            <div className="header mb-5">
              <h1 className="title shadow text-white bz-primary pl-3 pb-2 rounded">Mejoras</h1>
            </div>
            <ul>
              <li className="mb-1">Se puso a prueba la nueva estructura del Controller</li>
              <li className="mb-1">
                Se crearon los servicios y tipado necesarios para el sprint
                <a href="https://gitlab.com/aventuratech/erp_web_service">ERP Web Service</a>
              </li>
              <li>
                Se empezó a usar la nueva versión de Redity
                <a href="https://www.npmjs.com/package/redity">redity - npm</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Viewport>
  )
}
