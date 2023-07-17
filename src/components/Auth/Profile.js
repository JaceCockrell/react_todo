import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import './Auth.css'

export default function Profile() {
    const { currentUser } = useAuth() 
  return (
    <span className="profile p-2">
        Hello {!currentUser.dispalyName ? currentUser.email.split('@')[0] : currentUser.dispalyName.split(' ')[0]}!
        <img src={currentUser.photoURL} alt={currentUser.email} />
    </span>
  )
}
