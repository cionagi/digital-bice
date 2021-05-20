import React from 'react'
import { string } from 'prop-types'
import styles from './style.module.scss'

function Card({ image, title, label, description }) {
  return (
    <div className={styles.base}>
      <div className={styles.containerImage}>
        <img className={styles.image} src={image} alt={label} />
        <span className={styles.label}>{label}</span>
      </div>
      <div className={styles.containerText}>
        <span className={styles.title}>{title}</span>
        <span className={styles.paragraph}>{description}</span>
      </div>
    </div>
  )
}

Card.propTypes = {
  image: string.isRequired,
  title: string.isRequired,
  label: string.isRequired,
  description: string.isRequired,
}

export default Card
