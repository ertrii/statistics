import * as React from 'react'
import Viewport from '../../components/Viewport'
import { Col, Container, Row } from 'react-bootstrap'
import CountChart from '../../components/CountChart'

export default function Slide8() {
  return (
    <Viewport color="smoke">
      <Container>
        <Row>
          <Col sm={12}>
            <div className="header mb-5">
              <h1 className="title text-center text-white bz-primary pl-3 pb-2 rounded w-50">
                Desarrollo de Modulos
              </h1>
            </div>
          </Col>
          <Col sm={5} className="mt-5">
            <div className="header mb-4">
              <h3 className="title">Listado de Bodegas</h3>
              <h6>(1 de Febrero - 12 de Febrero)</h6>
            </div>
            <ul>
              <li>
                Inicio de Desarrollo: <span>1 de Febrero</span>
              </li>
              <li>
                Entrega: <span>10 de Febrero</span>
              </li>
              <li>
                Tiempo de retraso: <b>0 dias</b>
              </li>
            </ul>
          </Col>
          <Col sm={7} className="">
            <div className="header mb-4 mt-5">
              <h5 className="title pb-2 text-center">Revisiones</h5>
            </div>
            <Row>
              <Col sm={6}>
                <div className="d-flex flex-column align-items-center">
                  <CountChart number={1} color="warning" />
                  <h5>Técnico</h5>
                </div>
              </Col>
              <Col sm={6}>
                <div className="d-flex flex-column align-items-center">
                  <CountChart number={1} color="warning" />
                  <h5>Backend</h5>
                </div>
              </Col>
            </Row>
          </Col>

          <Col sm={5} className="mt-5">
            <div className="header mb-4">
              <h3 className="title">Creación y Edición de Bodegas</h3>
              <h6>(1 de Febrero - 12 de Febrero)</h6>
            </div>
            <ul>
              <li>
                Inicio de Desarrollo: <span>1 de Febrero</span>
              </li>
              <li>
                Entrega: <span>10 de Febrero</span>
              </li>
              <li>
                Tiempo de retraso: <b>0 dias</b>
              </li>
            </ul>
          </Col>
          <Col sm={7} className="mt-5">
            <Row>
              <Col sm={6}>
                <div className="d-flex flex-column align-items-center">
                  <CountChart number={6} color="warning" />
                  <h5>Técnico</h5>
                </div>
              </Col>
              <Col sm={6}>
                <div className="d-flex flex-column align-items-center">
                  <CountChart number={2} color="warning" />
                  <h5>Backend</h5>
                </div>
              </Col>
            </Row>
          </Col>
          <Col sm={5} className="mt-5">
            <div className="header mb-4">
              <h3 className="title">Activar y Desactivar Bodegas</h3>
              <h6>(1 de Febrero - 12 de Febrero)</h6>
            </div>
            <ul>
              <li>
                Inicio de Desarrollo: <span>1 de Febrero</span>
              </li>
              <li>
                Entrega: <span>10 de Febrero</span>
              </li>
              <li>
                Tiempo de retraso: <b>0 dias</b>
              </li>
            </ul>
          </Col>
          <Col sm={7} className="mt-5">
            <Row>
              <Col sm={6}>
                <div className="d-flex flex-column align-items-center">
                  <CountChart number={0} color="success" />
                  <h5>Técnico</h5>
                </div>
              </Col>
              <Col sm={6}>
                <div className="d-flex flex-column align-items-center">
                  <CountChart number={1} color="warning" />
                  <h5>Backend</h5>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Viewport>
  )
}
