import React from 'react'
import { string, func } from 'prop-types'
import styles from './style.module.scss'

function CustomButton({ text, onClick }) {
  return (
    <button type="button" className={styles.btn} onClick={onClick}>
      <span className={styles.label}>{text}</span>
    </button>
  )
}
CustomButton.defaultProps = {
  onClick: () => true,
}
CustomButton.propTypes = {
  text: string.isRequired,
  onClick: func,
}

export default CustomButton
