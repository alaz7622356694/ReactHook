import React,{useContext} from 'react'

import Card from './UI/Card'
import {AuthContext} from '../context/Auth-context'
import './Auth.css'

const Auth = (props) => {
  const authContext=useContext(AuthContext)
  const loginHandler = () => {
    authContext.login()
  }

  return (
    <div className="auth">
      <Card>
        <p>Please login to continue</p>
        <button onClick={loginHandler}>Login</button>
      </Card>
    </div>
  )
}

export default Auth
