import * as React from 'react'
import Viewport from '../../components/Viewport'
import { Col, Container, Row } from 'react-bootstrap'
import BarChart from '../../components/Graphics/BarChart'
import hours from '../../utils/hours'

export default function Slide3() {
  const data = {
    Fredy: {
      semana1: hours(0, 57),
      semana2: hours(16, 10),
      semana3: hours(12, 53),
    },
    Fatima: {
      semana1: hours(16, 36),
      semana2: hours(19, 40),
      semana3: hours(22, 15),
    },
    Carlos: {
      semana1: hours(33, 17),
      semana2: hours(38, 43),
      semana3: hours(46, 17),
    },
    'Sebastian A.': {
      semana1: hours(33, 4),
      semana2: hours(23, 56),
      semana3: hours(25, 3),
    },
    Kioshi: {
      semana1: hours(36, 50),
      semana2: hours(32, 44),
      semana3: hours(35, 39),
    },
    Erick: {
      semana1: hours(23, 23),
      semana2: hours(30, 59),
      semana3: hours(34, 42),
    },
    'Eric G.': {
      semana1: hours(40, 1),
      semana2: hours(16, 48),
      semana3: hours(15, 47),
    },
  }

  return (
    <Viewport>
      <Container>
        <Row>
          <Col sm={12}>
            <div className="header mb-3">
              <h4 className="title">Wakatime: General</h4>
            </div>
            <BarChart data={data} />
          </Col>
        </Row>
      </Container>
    </Viewport>
  )
}
