import React from 'react'
import './Country.css'
import { useState } from 'react';
import CountryDetails from '../CountryDetails';

const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, population, area, cca3} = country;
    console.log(country);

    const [visited, setVisited] = useState(false);


    const handleVisited = () => {
        setVisited(!visited);
    }


  return (
    <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
        <h3 style={{color: visited ? 'purple' : 'white'}}>Name: {name?.common}</h3>
        <img src={flags.png} alt="" />
        <p>Population: {population}</p>
        <p>area: {area}</p>
        <p><small>Code: {cca3}</small></p>
        <button onClick={()=> handleVisitedCountry(country)}>Mark Visited</button>
        <button  onClick={()=> handleVisitedFlags(country.flags.png)}>Add Flag</button>
        <br />
        <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
        {
            visited ? 'I have visited this country' : 'I want to visit'
        }
        <hr />
        <CountryDetails country={country} handleVisited={handleVisited}/>
    </div>
  )
}

export default Country