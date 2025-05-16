import React from 'react'
import './App.css'

const Device = (props) => {
    console.log()
  return (
    <>
    <h3>This device: {props.name} price is {props.price}</h3>
    <h2>Hello</h2>
    </>
  )
}

export default Device