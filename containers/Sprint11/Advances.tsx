import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Viewport from '../../components/Viewport'

export default function Advances() {
  return (
    <Viewport>
      <Container>
        <Row>
          <Col sm={12}>
            <table className="table shadow table-hover">
              <thead className="table-dark">
                <tr>
                  <th>Módulo</th>
                  <th>Estimado</th>
                  <th>Resultado</th>
                  <th>Autor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span>Listado de traspasos</span>
                  </td>
                  <td>
                    15 horas <b>3 días</b>
                  </td>
                  <td>
                    <span>
                      11 horas <b>3 días</b>
                    </span>
                  </td>
                  <td>Fredy</td>
                </tr>
                <tr>
                  <td>
                    <span>Nuevo traspaso</span>
                  </td>
                  <td>
                    12 horas <b>3 días</b>
                  </td>
                  <td>
                    <span>
                      13 horas <b>4 días</b>
                    </span>
                  </td>
                  <td>Fatima</td>
                </tr>
                <tr>
                  <td>
                    <span>Ver traspaso</span>
                  </td>
                  <td>
                    13 horas <b>3 días</b>
                  </td>
                  <td>
                    <span>
                      8 horas 39 min <b>4 días</b>
                    </span>
                  </td>
                  <td>Fatima</td>
                </tr>
                <tr>
                  <td>
                    <span>Confirmar traspaso</span>
                  </td>
                  <td>
                    12 horas <b>2 días</b>
                  </td>
                  <td>
                    <span>
                      21 horas <b>5 días</b>
                    </span>
                  </td>
                  <td>Fredy y Carlos</td>
                </tr>
                <tr>
                  <td>
                    <span>Asignar/Desasignar traspaso</span>
                  </td>
                  <td>
                    10 horas <b>2 días</b>
                  </td>
                  <td>
                    <span>
                      14 horas 47 min <b>3 días</b>
                    </span>
                  </td>
                  <td>Carlos</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </Viewport>
  )
}
