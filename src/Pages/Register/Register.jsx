import React from 'react'
import './index.css'
import { useState } from 'react';
function Register({ onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
   
  };

  return (
    <div className='register-wrapper'>
      <h1>Registratsiya</h1>
      <div className='input-wrapper'>
      <input
        type="text"
        placeholder="Foydalanuvchi nomi"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Parol"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        
      />
      <button onClick={handleRegister}>Ro'yxatdan o'tish</button>
      </div>
    </div>
  );
}
export default Register