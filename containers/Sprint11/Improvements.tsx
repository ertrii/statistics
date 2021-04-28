import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Viewport from '../../components/Viewport'

export default function Improvements() {
  return (
    <Viewport>
      <Container>
        <Row>
          <Col sm={12}>
            <div className="header mb-5">
              <h1 className="text-white bz-primary pl-3 pb-2 rounded">Mejoras</h1>
            </div>
          </Col>
          <Col sm={6}>
            <h2>Popup</h2>
            <img src="images/popup.png" alt="popup" className="img-fluid" />
          </Col>
          <Col sm={6}>
            <img src="images/dialog.png" alt="popup" className="img-fluid shadow mb-5" />
          </Col>
          <Col sm={6}>
            <h2>Progress</h2>
            <img src="images/progress.png" alt="progress" className="img-fluid" />
          </Col>
          <Col sm={6}>
            <img
              src="images/dialog_progress.png"
              alt="dialog progress"
              className="img-fluid shadow mb-5"
            />
          </Col>
          <Col sm={6}>
            <h2>Consolidación en la estructura</h2>
          </Col>
          <Col sm={6}>
            <img src="images/structure.png" alt="structure" className="shadow" />
          </Col>
        </Row>
      </Container>
    </Viewport>
  )
}
