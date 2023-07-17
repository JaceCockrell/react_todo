import React from 'react'

import { Nav, Navbar, NavbarBrand } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import { Link } from 'react-router-dom'
import Logout from './Auth/Logout'
//Logout will be conditionally rendered if the user is logged in so we need currentUser from AuthContext
import { useAuth } from '../contexts/AuthContext'

export default function Navigation() {
  const { currentUser } = useAuth()
  return (
    
    <>
    <Navbar expand='md' bg='dark' sticky='top' variant='dark' className='p-3'>
        <NavbarBrand href='/'>To Dos</NavbarBrand>
        <Navbar.Toggle />
        <NavbarCollapse className='justify-content-end'>
            {/* Links for each page will go here. In this project we are using react-router-dom, which carries a Link component that will render the anchor tag associated with the router we will create in App.js. To access the react-router-dom package, we must first:
                1. npm install react-router-dom 
                2. import Link from react-router-dom*/}
        <Nav>
            {!currentUser && <Link to='/login' className='nav-link'>Login</Link> }
            <Link to='/todos' className='nav-link'>To Dos</Link>
            <Link to='/categories' className='nav-link'>Categories</Link>
            {currentUser && <Link to='/logout' className='nav-link'>Logout</Link>}
        </Nav>
        </NavbarCollapse>
    </Navbar>
    </>
  )
}
