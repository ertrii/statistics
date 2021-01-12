import * as React from 'react'
import Viewport from '../../components/Viewport'
import { Col, Container, Row } from 'react-bootstrap'

export default function Slide4() {
  return (
    <Viewport color="smoke">
      <Container>
        <Row>
          <Col sm={5}>
            <div className="header">
              <h2 className="title text-white bz-primary pl-3 pb-2 rounded">
                Mejoras e Investigaciones
              </h2>
            </div>
            <ul className="list-group">
              <li className="list-group-item">Nueva mejora del controller</li>
              <li className="list-group-item">Un vistazo a testing con Gherkin</li>
              <li className="list-group-item">Tipado con Typescript</li>
              <li className="list-group-item">Documentación con JSDoc</li>
            </ul>
          </Col>
          <Col sm={7}>
            <div>
              <h5 className="text-primary">Controller v3</h5>
              <img className="img" src="images/Blank_Diagram_2.jpeg" />
              <h5 className="mt-3 text-primary">Controller v3.5.beta</h5>
              <img className="img" src="images/c2.png" />
            </div>
          </Col>
        </Row>
      </Container>
    </Viewport>
  )
}
