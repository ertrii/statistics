import * as React from 'react'
import Viewport from '../../components/Viewport'
import { Col, Container, Row } from 'react-bootstrap'
import CountChart from '../../components/CountChart'

export default function Slide2() {
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
              <h3 className="title">Exportación e Impresión</h3>
              <h6>(28 de Diciembre - 04 de Enero)</h6>
            </div>
            <ul>
              <li>
                Inicio de Desarrollo: <span>25 de Diciembre</span>
              </li>
              <li>
                Entrega: <span>05 de Enero</span>
              </li>
              <li>
                Tiempo de retraso: <b>1 día</b>
              </li>
            </ul>
            <h5>Librerías de Impresión</h5>
            <ul>
              <li>react-to-print</li>
            </ul>
            <h5>Librerías para exportación</h5>
            <ul>
              <li>reac-to-pdf</li>
              <li>react-pdf/renderer</li>
              <li>jsPDF</li>
              <li>html2canvas</li>
            </ul>
          </Col>
          <Col sm={7} className="">
            <div className="header mb-4 mt-5">
              <h5 className="title pb-2 text-center">Revisiones</h5>
            </div>
            <Row>
              <Col sm={6}>
                <div className="d-flex flex-column align-items-center">
                  <CountChart number={1} color="danger" />
                  <h5>Técnico</h5>
                </div>
              </Col>
              <Col sm={6}>
                <div className="d-flex flex-column align-items-center">
                  <CountChart number={0} color="warning" />
                  <h5>Backend</h5>
                </div>
              </Col>
            </Row>
          </Col>
          {/* <Col sm={7}>
            <BarChart />
            <p className="text-right text-muted mt-2 size-12">
              <EyeIcon /> Tener en cuenta que no estoy tomando los reportes del equipo de QA
            </p>
          </Col> */}
          <Col sm={5} className="mt-5">
            <div className="header mb-4">
              <h3 className="title">Creación y Edición Requisición</h3>
              <h6>(23 de Diciembre - 05 de Enero)</h6>
            </div>
            <ul>
              <li>
                Inicio de Desarrollo: <span>30 de Diciembre</span>
              </li>
              <li>
                Entrega: <span>09 de Enero</span>
              </li>
              <li>
                Tiempo de retraso: <b>4 días</b>
              </li>
            </ul>
          </Col>
          <Col sm={7} className="mt-5">
            <Row>
              <Col sm={6}>
                <div className="d-flex flex-column align-items-center">
                  <CountChart number={6} color="danger" />
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
          {/* <Col sm={7} className="mt-5">
            <BarChart />
            <p className="text-right text-muted mt-2 size-12">
              <EyeIcon /> Tener en cuenta que no estoy tomando los reportes del equipo de QA
            </p>
          </Col> */}
        </Row>
      </Container>
    </Viewport>
  )
}
