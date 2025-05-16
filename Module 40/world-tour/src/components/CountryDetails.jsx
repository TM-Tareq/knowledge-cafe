import React from 'react'
import CountryData from './CountryData/CountryData'

const CountryDetails = (props) => {
  return (
    <div>
        <h6>Details</h6>
        <CountryData {...props} />
    </div>
  )
}

export default CountryDetails