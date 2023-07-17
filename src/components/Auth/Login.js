import React from 'react'
//import AuthContext just like useState - Step 1.
import { useAuth } from '../../contexts/AuthContext'
import { Container, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    //Step 2. destructure the objects we want from useAuth and save them in a Hook
    const { login } = useAuth()//this line gives access to login
    const navigate = useNavigate()
    //below we write a custom handler() to log the user in and redirect them home upon success
    async function handleAuth() {
        await login()
        return navigate('/')
    }

  return (
    //Step 3. Create the UI and call upon the Login function as needed
    <div className="login">
        <article className="bg-info mb-5 p-5 text-dark">
            <h1 className="text-center">Welcome to My ToDo app!</h1>
        </article>
        <Container>
            <Card className='m-2 border-dark text-center'>
                <Card.Header className='bg-dark text-white'>
                    <h2>Login for full functionallity</h2>
                </Card.Header>
                <Card.Body>
                    <button className="btn btn-success" onClick={() => handleAuth()}>
                        Login with GitHub
                    </button>
                </Card.Body>
            </Card>
        </Container>
    </div>
  )
}
