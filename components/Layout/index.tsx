import * as React from 'react'
import { Container } from 'react-bootstrap'
import FilterGraphics from '../Filters/FilterGraphics'
import { PropsLayout } from './layout.interface'
import Styles from './layout.module.css'

export default function Layout(props: PropsLayout) {
  return (
    <Container fluid className={`${Styles.Layout} p-0`}>
      <div className="d-flex" style={{ width: '100%' }}>
        <div className={`${Styles['Layout-filters']}`}>
          <FilterGraphics />
        </div>
        <div className={`${Styles.main}`}>
          <div className={Styles['Layout-nav']}>Visualizador de los Colores de Codigo</div>
          <div className={Styles.content}>{props.children}</div>
        </div>
      </div>
    </Container>
  )
}
