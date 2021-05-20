import React, { useState } from 'react'
import CustomButton from '../../components/CustomButton'
import Card from '../../components/Card'
import Dropdown from '../../components/Dropdown'
import styles from './style.module.scss'

function Home() {
  const [insuranceSelected, setInsuranceSelected] = useState()
  const [insuranceId, setInsuranceId] = useState()

  const getInsurance = (id) => {
    const res = fetch(`https://dn8mlk7hdujby.cloudfront.net/interview/insurance/${id}`).then((response) =>
      response.json()
    )
    return res
  }

  const setInsurance = ({ insurance }) => {
    setInsuranceSelected(insurance)
  }

  const handleSelect = async (id) => {
    setInsuranceId(id)
  }

  const handleSearch = async () => {
    const res = await getInsurance(insuranceId)
    setInsurance(res)
  }

  return (
    <div className={styles.container}>
      <div className={styles.grid1}>
        <Dropdown placeholder="Seleccione un seguro" onSelect={handleSelect} />
        <CustomButton text="Buscar" onClick={handleSearch} />
      </div>
      <div className={styles.grid2}>
        {insuranceSelected && (
          <Card
            image={insuranceSelected.image}
            label={insuranceSelected.price}
            description={insuranceSelected.description}
            title={insuranceSelected.name}
          />
        )}
      </div>
    </div>
  )
}

export default Home
