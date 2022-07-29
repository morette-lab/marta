import React from 'react';
import { Input, Button } from './../../components'
import './styles.css'

function UserRegistration() {
  return (
    <div className="user-registration">
      <div className="user-registration-card">
        <h3 className="text-center mb-4">Formulário de cadastro</h3>
        <Input id="name" label="Nome" placeholder="Fulano" type="text" />
        <Input id="email" label="Email" placeholder="name@example.com" type="email" />
        <Input id="password" label="Senha" placeholder="fulano123@" type="password" />

        <Button label="Cadastrar" />
      </div>
    </div>
  )
}

export default UserRegistration;
