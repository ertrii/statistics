import * as React from 'react'
import Viewport from '../../components/Viewport'
import { Col, Container, Row } from 'react-bootstrap'
import HorizontalChart from '../../components/Graphics/HorizontalChart'

export default function Slide3() {
  return (
    <Viewport>
      <Container>
        <Row>
          <Col sm={12} className="mb-3">
            <div className="header mb-3">
              <h4 className="title">Listado de Requisiciones</h4>
            </div>
            <HorizontalChart
              data={[3, 6, 0, 2, 2, 1, 3, 1, 3, 1, 3, 2, 3, 10]}
              labels={['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M']}
            />
            <ul className="size-12 mt-3">
              <li className="mb-1">
                <b>A</b> No me permite cerrar el FloatContent Component al hacer click afuera.
              </li>
              <li className="mb-1">
                <b>B</b> FloatContent, debe volver a su estado anterior los filtros, en caso de que
                se haga click afuera. Hacer click afuera es como un cancel en caso de que aún no se
                haya aplicado.
              </li>
              <li className="mb-1">
                <b>G</b> Al escribir es demasiado lento en la búsqueda, esto es debido a que el
                Header ya está bien cargado para que solo un render ahí. Crea un nuevo KeyName solo
                para la Búsqueda y de igual manera para DatePickerRange.
              </li>
              <li className="mb-1">
                <b>I</b> Al anular una requisición el contador de los caracteres del TextArea no
                cambia su valor.
              </li>
              <li className="mb-1">
                <b>K</b> (Modo Offline) Hay que mostrar un Dialog de Error de Conexión en vez de una
                Notificación
              </li>
              <li className="mb-1">
                <b>M</b> El botom Limpiar del component FloatContent no está activo para reiniciar
                los filtros.
              </li>
            </ul>
          </Col>
          <Col sm={6}>
            <div className="header mb-3">
              <h4 className="title">Sesión</h4>
            </div>
            <HorizontalChart data={[2, 1, 1, 2, 3, 10]} labels={['A', 'B', 'C', 'D', 'E']} />
          </Col>
          <Col sm={6}>
            <div className="header mb-3">
              <h4 className="title">SelectField</h4>
            </div>
            <HorizontalChart data={[1, 4, 10]} labels={['A', 'B']} />
          </Col>
        </Row>
      </Container>
    </Viewport>
  )
}
