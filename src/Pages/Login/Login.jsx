import React from 'react'
import { useState } from 'react';
import user from '../../assets/login.jpg'
import './index.css'
function Login({ onLogin }) {
  const [foydalanuvchi, setFoydalanuvchi] = useState('');

  const handleLogin = () => {
    if (foydalanuvchi.trim() !== '') {
      onLogin(foydalanuvchi);
    }
  };

  return (
    <div className='login-wrapper'>
      <h1>Login</h1>
     <div className="input-wrapper">
      <span className='login-img'><img src={user} alt="" /></span>
     <input
        type="text"
        placeholder="Foydalanuvchi nomi"
        value={foydalanuvchi}
        onChange={(e) => setFoydalanuvchi(e.target.value)}
      />
      <button onClick={handleLogin}>Kirish</button>
     </div>
    </div>
  );
}
export default Login