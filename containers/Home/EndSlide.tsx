import * as React from 'react'
import Viewport from '../../components/Viewport'
import { Col, Container, Row } from 'react-bootstrap'
import { GlobeIcon } from '@primer/octicons-react'

export default function EndSlide() {
  return (
    <Viewport>
      <Container>
        <Row>
          <Col sm={12}>
            <div className="text-center">
              <p className="size-15">
                <GlobeIcon size={30} />
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Viewport>
  )
}
