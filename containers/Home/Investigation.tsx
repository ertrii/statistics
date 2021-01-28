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
              <h1 className="title shadow text-white bz-primary pl-3 pb-2 rounded">
                Temas de Investigación
              </h1>
            </div>
            <ul>
              <li className="mb-1">
                <span>Diseño centrado en el usuario (DCU)</span>, una filosofía de diseño que se
                centran en los usuarios y sus necesidades.
              </li>
              <li className="mb-1">
                <span>Recoil</span>, es un manejador de estados para React.{' '}
                <a href="https://recoiljs.org/docs/introduction/getting-started">
                  Recoil Documentación
                </a>
              </li>
            </ul>
          </Col>
          <Col sm={12}>
            <img style={{ width: '100%' }} src="images/es.png" />
          </Col>
        </Row>
      </Container>
    </Viewport>
  )
}
