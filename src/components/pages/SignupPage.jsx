import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    repeat: '',
    name: '',
  });
  const handleChange = (event) => setFormData((prev) => ({
    ...prev,
    [event.target.name]: event.target.value,
  }));
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.password !== formData.repeat || formData.password === '' || formData.repeat === '' || formData.name === '' || formData.email === '') {
      alert('Неверные данные');
      return;
    }
    const response = await axios.post('/api/auth/signup', formData);
    if (response.status === 200) {
      window.location.href = '/';
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control value={formData.email} onChange={handleChange} type="email" name="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Имя</Form.Label>
        <Form.Control value={formData.name} onChange={handleChange} type="text" name="name" placeholder="Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control value={formData.password} onChange={handleChange} type="password" name="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Повторить пароль</Form.Label>
        <Form.Control
          value={formData.repeat}
          onChange={handleChange}
          isInvalid={formData.password !== formData.repeat && formData.repeat !== ''}
          type="password"
          name="repeat"
          placeholder="Repeat password"
        />
        <Form.Control.Feedback type="invalid">
          Пароли должны совпадать
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        Регистрация
      </Button>
    </Form>
  );
}
