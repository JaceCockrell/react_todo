import React from 'react'
import Navigation from './components/Navigation'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ToDos from './components/ToDos/ToDos'
import Login from './components/Auth/Login'
import Categories from './components/Categories/Categories'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import AuthProvider from './contexts/AuthContext'
import Logout from './components/Auth/Logout'
import ProtectedRoute from './components/ProtectedRoute'



export default function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Navigation />
          {/* This is like a switch that decides what to render to the screen based on the current url path */}
          <Routes>
            <Route path='/' element={<ProtectedRoute><ToDos /></ProtectedRoute>} />
            <Route path='/todos' element={ <ProtectedRoute><ToDos /></ProtectedRoute> } />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/categories' element={<Categories />} />
            {/* The NotFound component will be an error handler (page showing a nice message) and will be tied to any other Route than what is detailed above. All routes listed above this Route will have very specific paths that are listed for them. This Route will be a catch all for the rest of what could be in the path */}
            <Route path='*' element={<NotFound/>} />
          </Routes>
          <Footer />  
        </Router>
      </AuthProvider>
    </div>
  )
}
