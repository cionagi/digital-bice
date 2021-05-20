import React from 'react'
import { func, number, string } from 'prop-types'
import styles from './style.module.scss'

function Options({ id, label, onClick }) {
  return (
    <div className={styles.option} role="button" onClick={() => onClick(id)} onKeyDown={() => onClick(id)} tabIndex={0}>
      {label}
    </div>
  )
}

Options.defaultProps = {}

Options.propTypes = {
  onClick: func.isRequired,
  label: string.isRequired,
  id: number.isRequired,
}

export default Options
