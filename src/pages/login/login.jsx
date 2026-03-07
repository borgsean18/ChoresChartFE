import { Link } from 'react-router-dom';
import './login.css';

function InputField({ type, placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="login-input"
    />
  );
}

function Login() {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form">
        <InputField type="text" placeholder="Username" />
        <InputField type="password" placeholder="Password" />
        <button type="submit" className="login-button">
          Log In
        </button>
      </form>
      <p className="auth-link">
        Don&apos;t have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;
