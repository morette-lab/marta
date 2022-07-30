import React, { ChangeEvent, useState } from 'react';
import { Input, Button } from './../../components'
import './styles.css'

interface UserData {
  name: string;
  email: string;
  password: string;
}

type InputChangeEvent = ChangeEvent<HTMLInputElement>

function UserRegistration() {
  const [data, setData] = useState<UserData>({ name: "", email: "", password: "" })

  const setState = (event: InputChangeEvent) => {
    setData((d: UserData) => {
      return { ...d, [event.target.id]: event.target.value }
    })
  }

  const onClick = () => {
    if (allFieldsAreValid(data)) {
      registerUser(data)
      return
    }

    return alert("Todos os campos são obrigatórios.")
  }

  const allFieldsAreValid = ({ name, email, password }: UserData) => {
    if (name && email && password) return true

    return false
  }

  const registerUser = (_data: UserData) => {
    // TODO API
  }

  return (
    <div className="user-registration">
      <div className="user-registration-card">
        <h3 className="text-center mb-4">Formulário de cadastro</h3>
        <Input
          id="name"
          label="Nome"
          placeholder="Fulano"
          type="text"
          onChange={setState}
        />
        <Input
          id="email"
          label="Email"
          placeholder="name@example.com"
          type="email"
          onChange={setState}
        />
        <Input
          id="password"
          label="Senha"
          placeholder="fulano123@"
          type="password"
          onChange={setState}
        />

        <Button label="Cadastrar" onClick={onClick} />
      </div>
    </div>
  )
}

export default UserRegistration;
