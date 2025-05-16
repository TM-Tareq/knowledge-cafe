import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(()=> {
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data=> setCountries(data))
    }, []);


    const handleVisitedCountry = country => {
        console.log('Add this to your visited country');
        const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry);
    }


    const handleVisitedFlags = flag => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }



    // remove item form an array in a state
    // use filter to select all the elements except the one you want to remove
    



  return (
    <div className='country-container'>
        <h3>Countries: {countries.length}</h3>

        {/* visited countries */}
        <div>
            <h5>Visited Countries: {visitedCountries.length}</h5>
            <ul>
                {visitedCountries.map(country => <li key={country.cca3}>country.name.common</li>)}
            </ul>
        </div>

        <div className='flag-container'>
            {
                visitedFlags.map((flag, idx)=> <img key={idx} src={flag}></img>)
            }

        </div>

        {/* display countries */}
        <div className='country-container'>
            {
                countries.map(country => <Country key={country.cca3} country={country} handleVisitedCountry= {handleVisitedCountry} handleVisitedFlags= {handleVisitedFlags} />)
            }
        </div>
    </div>
  )
}

export default Countries