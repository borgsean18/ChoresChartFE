import { Link } from 'react-router-dom';
import './register.css';

function InputField({ type, placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="register-input"
    />
  );
}

function Register() {
  return (
    <div className="register-container">
      <h1>Register</h1>
      <form className="register-form">
        <InputField type="text" placeholder="Username" />
        <InputField type="email" placeholder="Email" />
        <InputField type="password" placeholder="Password" />
        <InputField type="password" placeholder="Confirm Password" />
        <button type="submit" className="register-button">
          Create Account
        </button>
      </form>
      <p className="auth-link">
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}

export default Register;
