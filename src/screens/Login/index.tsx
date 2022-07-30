import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './styles.css'
import { Input, Button } from './../../components'
import { loginRequest } from './../../services/api'

type InputChangeEvent = ChangeEvent<HTMLInputElement>

function Login() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const navigate = useNavigate()

  const onClick = async () => {
    const response = await loginRequest({ email, password })
    handleResponse(response)
  }

  const handleResponse = async (response: any) => {
    if (response.ok) {
      const body = await response.json()
      storeToken(body.token)

      alert("Seja bem-vindo!")

      navigate("/")
    } else {
      alert("Ocorreu um erro.")
    }
  }

  const storeToken = (token: string) => localStorage.setItem("user-token", token)

  return (
    <div className="login-container">
      <div className="login-card">
        <h3 className="text-center mb-4">Login</h3>
        <Input
          id="email"
          label="Email"
          placeholder="name@example.com"
          type="email"
          onChange={(event: InputChangeEvent) => setEmail(event.target.value)}
        />
        <Input
          id="password"
          label="Senha"
          placeholder="fulano123@"
          type="password"
          onChange={(event: InputChangeEvent) => setPassword(event.target.value)}
        />
        <Button label="Entrar" onClick={onClick} />
      </div>
    </div>
  )
}

export default Login;
