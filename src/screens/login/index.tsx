import React from 'react';
import './styles.css'

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h3 className="text-center mb-4">Login</h3>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="name@example.com" />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Senha</label>
          <input type="password" className="form-control" id="password" placeholder="fulano123@" />
        </div>

        <button type="button" className="btn btn-outline-success w-100">Entrar</button>
      </div>
    </div>
  )
}

export default Login;
