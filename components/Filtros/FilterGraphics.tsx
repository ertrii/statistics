import { Form } from 'react-bootstrap'

export default function FilterGraphics() {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Proyecto</Form.Label>
        <Form.Control as="select" defaultValue="Choose...">
          <option>Choose...</option>
          <option>...</option>
        </Form.Control>
        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
      </Form.Group>

      <Form.Group controlId="formGridState">
        <Form.Label>Equipo</Form.Label>
        <Form.Control as="select" defaultValue="Choose...">
          <option>Choose...</option>
          <option>...</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formGridState">
        <Form.Label>Sprint</Form.Label>
        <Form.Control as="select" defaultValue="Choose...">
          <option>Choose...</option>
          <option>...</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formGridState">
        <Form.Label>Tipo de clasificación</Form.Label>
        <Form.Control as="select" defaultValue="Choose...">
          <option>Choose...</option>
          <option>...</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formGridState">
        <Form.Label>Unidad de medición</Form.Label>
        <Form.Control as="select" defaultValue="Choose...">
          <option>Choose...</option>
          <option>...</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formGridState">
        <Form.Label>Tipo de Gráfica</Form.Label>
        <Form.Control as="select" defaultValue="Choose...">
          <option>Choose...</option>
          <option>...</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formGridState">
        <Form.Label>Tipo de olor</Form.Label>
        <Form.Control as="select" defaultValue="Choose...">
          <option>Choose...</option>
          <option>...</option>
        </Form.Control>
      </Form.Group>
    </Form>
  )
}
