import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({children}) {
    const { currentUser } = useAuth()
    //below we check for a currentUser. if yes then render children, otherwise navigate user to the Login
  return currentUser ? children : <Navigate to='/login' />
}
