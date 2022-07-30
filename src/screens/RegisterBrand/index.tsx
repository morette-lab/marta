import React from 'react';
import { Input, Button } from './../../components'
import './styles.css'

function RegisterBrand() {
  return (
    <div className="registration-brand">
      <div className="registration-brand-card">
        <h3 className="text-center mb-4">Cadastrar marca</h3>
        <Input
          id="name"
          label="Nome"
          placeholder="Coca-cola"
          type="text"
        />
        <Button label="Cadastrar" />
      </div>
    </div>
  )
}

export default RegisterBrand;
