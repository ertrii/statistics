import * as React from 'react'
import Viewport from './Viewport'
import { Col, Container, Row } from 'react-bootstrap'

export interface StartProps {
  title: string
  children?: React.ReactNode
}

export default function Start({ title, children }: StartProps) {
  return (
    <Viewport>
      <Container>
        <Row>
          <Col sm={12}>
            <div className="header mb-5">
              <h1 className="title shadow text-white bz-primary pl-3 pb-2 rounded text-center">
                {title}
              </h1>
            </div>
            {children}
          </Col>
          <Col sm={12}>
            <img src="images/erp.png" className="img-fluid shadow rounded-lg" />
          </Col>
        </Row>
      </Container>
    </Viewport>
  )
}
