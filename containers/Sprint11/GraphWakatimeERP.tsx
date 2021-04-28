import * as React from 'react'
import Viewport from '../../components/Viewport'
import { Col, Container, Row } from 'react-bootstrap'
import BarChart from '../../components/Graphics/BarChart'
import hours from '../../utils/hours'

export default function GraphWakatimeERP() {
  const data = {
    Fredy: {
      semana1: hours(0, 57),
      semana2: hours(16, 10),
      semana3: hours(12, 53),
    },
    Fatima: {
      semana1: hours(16, 28),
      semana2: hours(19, 17),
      semana3: hours(22, 14),
    },
    Carlos: {
      semana1: hours(4, 36),
      semana2: hours(23, 24),
      semana3: hours(11, 10),
    },
    'Sebastian A.': {
      semana1: hours(12, 4),
      semana2: hours(13, 3),
      semana3: hours(13, 59),
    },
    Kioshi: {
      semana1: hours(12, 5),
      semana2: hours(13, 45),
      semana3: hours(15, 45),
    },
    Erick: {
      semana1: hours(9, 49),
      semana2: hours(25, 37),
      semana3: hours(25, 16),
    },
    'Eric G.': {
      semana1: hours(0, 0),
      semana2: hours(0, 0),
      semana3: hours(0, 0),
    },
  }

  return (
    <Viewport>
      <Container>
        <Row>
          <Col sm={12}>
            <div className="header mb-3">
              <h4 className="title">Wakatime: ERP</h4>
            </div>
            <BarChart data={data} />
          </Col>
          <Col sm={12}>
            <p>
              Esto solo incluye <span>ERP Web Advance, ERP Web Service y ERP Web Components</span>
            </p>
          </Col>
        </Row>
      </Container>
    </Viewport>
  )
}
