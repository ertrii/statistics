import * as React from 'react'
import Viewport from '../../components/Viewport'
import { Col, Container, Row } from 'react-bootstrap'

export default function Start() {
  return (
    <Viewport>
      <Container>
        <Row>
          <Col sm={5}>
            <div className="header mb-5">
              <h1 className="title shadow text-white bz-primary pl-3 pb-2 rounded">
                Frontend: Sprint 5
              </h1>
            </div>
            <ul>
              <li className="mb-1">
                Listado de requisiciones
                <ul>
                  <li>Búsqueda</li>
                  <li>Visualización de requisición</li>
                  <li>Anular requisición</li>
                </ul>
              </li>
              <li className="mb-1">Fields</li>
              <li className="mb-1">Scroll en los SelectField</li>
              <li className="mb-1">DatePicker</li>
              <li className="mb-1">Sesiones</li>
              <li className="mb-1">Analisis de testing</li>
              <li className="mb-1">Mejoras en el controller</li>
            </ul>
          </Col>
          <Col sm={7}>
            <img src="images/20944986.jpg" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Viewport>
  )
}
