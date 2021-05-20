import React, { useState } from 'react'
import { func, string } from 'prop-types'
import styles from './style.module.scss'
import ARROW_ICON from './assets/arrow.svg'
import Options from './components/Options'
import { INSURANCES } from '../../constants/insurance'

function Dropdown({ placeholder, onSelect }) {
  const [open, setOpen] = useState(false)
  const [labelSelected, setLabelSelected] = useState(false)

  const toggleOptions = () => {
    setOpen(!open)
  }

  const searchLabel = (value) => {
    const insurances = INSURANCES.find(({ id }) => id === value)
    setLabelSelected(insurances.name || placeholder)
  }

  const selectOption = (value) => {
    onSelect(value)
    searchLabel(value)
    toggleOptions()
  }

  const renderOptions = () =>
    INSURANCES.map(({ id, name }) => <Options onClick={selectOption} key={id} id={id} label={name} />)

  return (
    <div className={styles.containerDropdown}>
      <div
        className={styles.containerInput}
        role="button"
        onClick={toggleOptions}
        onKeyDown={toggleOptions}
        tabIndex={0}
      >
        <div className={`${styles.label} ${open && styles.active}`}> {labelSelected || placeholder}</div>
        <div>
          <img src={ARROW_ICON} className={styles.arrow} alt="Arrow icon" />
        </div>
      </div>
      <div className={`${styles.options} ${!open && styles.hide}`}>{renderOptions()}</div>
    </div>
  )
}

Dropdown.defaultProps = {
  placeholder: 'Selection',
}

Dropdown.propTypes = {
  placeholder: string,
  onSelect: func.isRequired,
}

export default Dropdown
