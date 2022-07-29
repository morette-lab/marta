import React from 'react';
import './styles.css'
import { Input, Button } from './../../components'

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h3 className="text-center mb-4">Login</h3>
        <Input
          id="email"
          label="Email"
          placeholder="name@example.com"
          type="email"
        />
        <Input
          id="password"
          label="Senha"
          placeholder="fulano123@"
          type="password"
        />
        <Button label="Entrar" />
      </div>
    </div>
  )
}

export default Login;
