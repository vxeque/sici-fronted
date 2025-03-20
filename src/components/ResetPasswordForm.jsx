import React, { useState } from 'react';

const ResetPasswordForm = ({ onResetPassword, loading }) => {
  const [resetEmail, setResetEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onResetPassword(resetEmail);
  };

  return (
    <div className="login-box">
      <h3>Restablecer Contraseña</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="label">Correo Electrónico:</label>
          <input 
            type="email" 
            value={resetEmail} 
            onChange={(e) => setResetEmail(e.target.value)} 
            required 
            className="input"
          />
        </div>
        <button type="submit" disabled={loading} className="button button-danger">
          {loading ? 'Enviando...' : 'Enviar solicitud'}
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
