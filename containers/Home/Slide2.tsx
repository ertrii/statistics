import * as React from 'react'
import Viewport from '../../components/Viewport'
import { Col, Container, Row } from 'react-bootstrap'
import CountChart from '../../components/CountChart'
import BarChart from '../../components/Graphics/BarChart'
import { EyeIcon } from '@primer/octicons-react'

export default function Slide2() {
  return (
    <Viewport color="smoke">
      <Container>
        <Row>
          <Col sm={12}>
            <div className="header mb-5">
              <h1 className="title text-center text-white bz-primary pl-3 pb-2 rounded w-50">
                Desarrollo
              </h1>
            </div>
          </Col>
          <Col sm={5} className="mt-5">
            <div className="header mb-4">
              <h3 className="title pb-2">Durante el desarrollo...</h3>
            </div>
            <p>
              Hemos sufrido un retraso de <b>1 día</b>, por estos motivos:
            </p>
            <ul>
              <li>
                Se venía arrastrando el componente <span>DatePicker</span>.
              </li>
              <li>
                Varios errores técnicos en las reviciones, que podían sumar <b>1 día en total</b>.
              </li>
              <li>Construcción del data JSON.</li>
              <li>
                Pensar en construir que el componente <span>Modal de visualización</span> sea
                reutilizable para los siguientes modulos.
              </li>
            </ul>
          </Col>
          <Col sm={7} className="mt-5">
            <div className="header mb-4 mt-5">
              <h4 className="title pb-2 text-center">Revisiones</h4>
            </div>
            <Row>
              <Col sm={4}>
                <div className="d-flex flex-column align-items-center">
                  <CountChart number={19} color="danger" />
                  <h5>Técnico</h5>
                </div>
              </Col>
              <Col sm={4}>
                <div className="d-flex flex-column align-items-center">
                  <CountChart number={1} />
                  <h5>Documentación</h5>
                </div>
              </Col>
              <Col sm={4}>
                <div className="d-flex flex-column align-items-center">
                  <CountChart number={4} color="warning" />
                  <h5>Backend</h5>
                </div>
              </Col>
            </Row>
          </Col>
          <Col sm={12}>
            <BarChart />
            <p className="text-right text-muted mt-2 size-12">
              <EyeIcon /> Tener en cuenta que no estoy tomando los reportes del equipo de QA
            </p>
          </Col>
        </Row>
      </Container>
    </Viewport>
  )
}
