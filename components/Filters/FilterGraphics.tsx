import { Form } from 'react-bootstrap'
import Styles from './filter_graphics.module.css'

export default function FilterGraphics() {
  return (
    <div className="pt-1 pl-4 pr-4">
      <div className={`${Styles['Filter-logo']}`}>
        <img src="images/filters-icon.png" />
      </div>
      <Form>
        <Form.Group controlId="formBasicEmail" className="mb-4">
          <Form.Label>Proyecto</Form.Label>
          <Form.Control as="select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Control>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formGridState" className="mb-4">
          <Form.Label>Equipo</Form.Label>
          <Form.Control as="select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formGridState" className="mb-4">
          <Form.Label>Sprint</Form.Label>
          <Form.Control as="select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formGridState" className="mb-4">
          <Form.Label>Tipo de clasificación</Form.Label>
          <Form.Control as="select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formGridState" className="mb-4">
          <Form.Label>Unidad de medición</Form.Label>
          <Form.Control as="select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formGridState" className="mb-4">
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
    </div>
  )
}
