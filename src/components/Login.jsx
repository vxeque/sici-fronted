import React, { useState } from 'react';
import axios from 'axios';
import LoginForm from './LoginForm';
import ResetPasswordForm from './ResetPasswordForm';
import '../styles/Login.css';

const Login = () => {
  const [message, setMessage] = useState('');
  const [showReset, setShowReset] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (email, password) => {
    setLoading(true);
    setMessage('');
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setMessage('Inicio de sesión exitoso');
      window.location.href = '/dashboard';
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error en inicio de sesión');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (resetEmail) => {
    setLoading(true);
    setMessage('');
    try {
      const response = await axios.post('http://localhost:5000/api/auth/forgotpassword', { email: resetEmail });
      setMessage(response.data.message || 'Solicitud enviada. Revisa tu correo.');
      setShowReset(false);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error al solicitar restablecimiento de contraseña');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      {!showReset ? (
        <LoginForm onLogin={handleLogin} onShowReset={() => setShowReset(true)} loading={loading} />
      ) : (
        <ResetPasswordForm onResetPassword={handleForgotPassword} loading={loading} />
      )}
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Login;
