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
              <h1 className="title shadow text-white bz-primary pl-3 pb-2 rounded">Sprint 8</h1>
            </div>
            <ul>
              <li className="mb-1">Listado de Bodegas</li>
              <li className="mb-1">Creación y Edición de Bodegas</li>
              <li className="mb-1">Activación y Desactivación de Bodegas</li>
              <li className="mb-1">Tipado de respuestas</li>
              <li className="mb-1">Servicios de Bodegas</li>
              <li className="mb-1">Testing Library</li>
              <li className="mb-1">Reestructuración de Categorías</li>
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
