import * as React from 'react'
import Viewport from '../../components/Viewport'
import { Col, Container, Row } from 'react-bootstrap'

export default function ItsComming() {
  return (
    <Viewport>
      <Container>
        <Row>
          <Col sm={6}>
            <div className="header mb-5">
              <h1 className="title text-white bz-primary pl-3 pb-2 rounded">Se Viene:</h1>
            </div>
            <div>
              <h5>Redity Dev Tools</h5>
              <p>
                Una extensión para navegadores basado en chromiun, que será una herramienta que
                ayudará en el desarrollo de los modulos.
              </p>
              <h5>Mejoras en Redity</h5>
              <ul>
                <li>Se removerán algunas funciones deprecated</li>
                <li>Mejoras</li>
                <li>Nuevas funcionalidades y compatibilidad con la extensión Dev Tools</li>
              </ul>
              <h5>Service Worker</h5>
              <p>Una secuencia de comandos que tu navegador ejecuta en segundo plano</p>
              <ul>
                <li>Mejoras en modo offline</li>
                <li>Cache</li>
              </ul>
              <h5>Modulos reusables</h5>
              <p>Permitirán gran parte de su lógica de los módulos sean reusables</p>
              <h5>ERP API Fake</h5>
              <p>
                Para evitar la espera a Back, se simularían las API's como si ya hubieran sido
                desarrolladas.
              </p>
              <h5>Listtore</h5>
              <p>
                Es la mejora de Localrest, mas liviano y mejor enfocada. Tendrá compatibilidad con
                otras herramientas para control de datos, como <b>Sttore</b>
              </p>
              <h5>ERP Web Components</h5>
              <p>Mejoras en los estilos base y inspeccionar un mejor standarizado.</p>
              <h5>Bot</h5>
              <p>Si hay tiempo avazaremos con un bot para Discord, que se venía viendo.</p>
            </div>
          </Col>
          <Col sm={6}>
            <img src="images/redux_dev_tools.gif" alt="redux_dev_tools" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Viewport>
  )
}
