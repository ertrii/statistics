import * as React from 'react'
import PropTypes from 'prop-types'
import { PropsViewport } from './viewport.interface'
import styles from './viewport.module.css'

export default function Viewport({ children, color }: PropsViewport) {
  return <div className={`${styles.viewport} ${styles[color || '']}`}>{children}</div>
}

Viewport.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['smoke', 'white']),
}

Viewport.defaultProps = {
  color: 'white',
}
