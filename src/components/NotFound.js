import React from 'react'
import image from '../images/404.jpeg'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className='notFound'>
        <img src={image} alt='Resource not found'></img>
        <h1>Oops..</h1>
    </div>
  )
}
