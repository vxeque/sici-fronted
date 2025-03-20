import React, { useState } from 'react';

const LoginForm = ({ onLogin, onShowReset, loading }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="login-box">
      <h2>Inicio de Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="label">Correo Electrónico:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="input"
          />
        </div>
        <div>
          <label className="label">Contraseña:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            className="input"
          />
        </div>
        <button type="submit" disabled={loading} className="button button-primary">
          {loading ? 'Cargando...' : 'Iniciar Sesión'}
        </button>
      </form>
      <button onClick={onShowReset} className="button button-secondary">
        Olvidé mi contraseña
      </button>
    </div>
  );
};

export default LoginForm;
