import { useState } from 'react';
import { Link } from 'react-router-dom';
import { InputField, Button } from '../../components/formComponents';
import './forgotPassword.scss';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  function validate() {
    const next = {};
    if (!email.trim()) {
      next.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = 'Enter a valid email address.';
    }
    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      // submit
    }
  }

  return (
    <div className="forgot-password-container">
      <h1>Forgot Password</h1>
      <form className="forgot-password-form" onSubmit={handleSubmit} noValidate>
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />
        <Button type="submit" className="send-form-button">
          Reset Password
        </Button>
      </form>
      <p className="auth-link">
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}

export default ForgotPassword;
