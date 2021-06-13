import React from 'react'

import Card from './UI/Card'

import './Auth.css'

const Auth = (props) => {
  const loginHandler = () => {}

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
