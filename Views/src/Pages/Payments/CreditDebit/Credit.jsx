import React, { useState } from 'react';
import './Credit.css';


const Credit = () => {
  const [formData, setFormData] = useState({
    NumeroDoCartao: '',
    cvv: '',
    dataDeVencimento: '',
    nome: '',
    sobrenome: '',
    cpf: '',
    dataDeNascimento: '',
    email: '',
    termsAccepted: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const isCpfValid = (cpf) => {
    // Remove caracteres não numéricos
    const cleanedCpf = cpf.replace(/\D/g, '');

    // Verifica se o CPF tem 11 dígitos
    if (cleanedCpf.length !== 11) {
      return false;
    }

    // Verifica se todos os dígitos são iguais (CPF inválido)
    if (/^(\d)\1{10}$/.test(cleanedCpf)) {
      return false;
    }

    // Calcula os dígitos verificadores
    let sum = 0;
    let factor = 10;

    for (let i = 0; i < 9; i++) {
      sum += cleanedCpf[i] * factor;
      factor--;
    }

    let remainder = (sum % 11);
    let firstDigit = (remainder < 2) ? 0 : 11 - remainder;

    if (parseInt(cleanedCpf[9]) !== firstDigit) {
      return false;
    }

    sum = 0;
    factor = 11;

    for (let i = 0; i < 10; i++) {
      sum += cleanedCpf[i] * factor;
      factor--;
    }

    remainder = (sum % 11);
    let secondDigit = (remainder < 2) ? 0 : 11 - remainder;

    return parseInt(cleanedCpf[10]) === secondDigit;
  };

  const isEmailValid = (email) => {
    // Expressão regular para validar o formato de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = () => {
    const requiredFields = ['NumeroDoCartao', 'cvv', 'dataDeVencimento', 'nome', 'sobrenome', 'cpf', 'dataDeNascimento', 'email'];

    for (const field of requiredFields) {
      if (!formData[field]) {
        alert(`Por favor, preencha o campo ${field}`);
        return false;
      }
    }

    // Validação específica para o CPF
    if (!isCpfValid(formData.cpf)) {
      alert('CPF inválido');
      return false;
    }

    if (!isEmailValid(formData.email)) {
      alert('Formato de e-mail inválido');
      return false;
    }
  
    if (!formData.termsAccepted) {
      alert('Você deve aceitar os termos');
      return false;
    }

    // Outras lógicas de validação podem ser adicionadas aqui
   

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      console.log('Formulário enviado:', formData);
      // Adicione aqui a lógica de envio do formulário para o servidor ou qualquer outra ação desejada
    alert("Compra finalizada")
      window.location.reload();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='formCard'>
        <input
          type="number"
          name="NumeroDoCartao"
          placeholder='Número do cartão'
          inputMode="none"
          value={formData.NumeroDoCartao}
          onChange={handleInputChange}
        />
        <div>
          <input
            type="number"
            name="cvv"
            placeholder='CVV'
            value={formData.cvv}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="dataDeVencimento"
            placeholder='Data de validade'
            value={formData.dataDeVencimento}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="nome"
            placeholder='Nome'
            value={formData.nome}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="sobrenome"
            placeholder='Sobrenome'
            value={formData.sobrenome}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="cpf"
            placeholder='CPF'
            value={formData.cpf}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="dataDeNascimento"
            placeholder='DD/MM/AAAA'
            value={formData.dataDeNascimento}
            onChange={handleInputChange}
          />
        </div>
        <input
          type="text"
          name="email"
          placeholder='Email'
          value={formData.email}
          onChange={handleInputChange}
        />
        <section className='confirmationBuy'>
          <section className='checkBox'>
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleInputChange}
            />
            <label>Aceito todos os termos</label>
          </section>
          <button type="submit" className='btnBuy'>Finalizar Pagamento</button>
        </section>
      </form>
    </div>
  );
};

export default Credit;
