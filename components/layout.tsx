import * as React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { PropsLayout } from './layout.interface'

export default function Layout(props: PropsLayout) {
  return (
    <Container fluid>
      <Navbar bg="light" expand>
        <Navbar.Brand>Visualizador de los olores de código</Navbar.Brand>
      </Navbar>
      <Container className="mt-4">{props.children}</Container>
    </Container>
  )
}
