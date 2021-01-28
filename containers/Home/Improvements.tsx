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
              <li className="mb-1">
                Redity migró a Typescript y se optimizó. Tambien trajo nuevas funcionalidades.{' '}
                <a href="https://www.npmjs.com/package/redity">redity - npm</a>
              </li>
              <li className="mb-1">
                Se definió la estructura del nuevo proyecto para los servicios, desarrollado en
                TypeScript.{' '}
                <a href="https://gitlab.com/aventuratech/erp_web_service">ERP Web Service</a>
              </li>
              <li className="mb-1">Dos nuevas librerías en camino:</li>
              <ul>
                <li className="mb-1">Sttates, para store.</li>
                <li className="mb-1">Fter, para las queries de las peticiones.</li>
              </ul>
            </ul>
          </Col>
          <Col sm={6}>
            <img style={{ width: '100%' }} src="images/carbon.png" />
          </Col>
          <Col sm={6}>
            <img style={{ width: '100%' }} src="images/carbon2.png" />
          </Col>
        </Row>
      </Container>
    </Viewport>
  )
}
