import './register.css';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      password.current.setCustomValidity("Passwords don't match.");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        console.log('entered');
        await axios.post('http://localhost:8800/api/auth/register', user);
        console.log('await passed');
        navigate('/login');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo">Teskilat Social</h3>
          <span className="login-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            necessitatibus vero praesentium illo voluptatibus.
          </span>
        </div>
        <div className="login-right">
          <form className="login-box" onSubmit={handleClick}>
            <input
              placeholder="Username"
              type="text"
              ref={username}
              className="login-input"
              required
            />
            <input
              placeholder="Email"
              type="email"
              ref={email}
              className="login-input"
              required
            />
            <input
              placeholder="Password"
              type="password"
              className="login-input"
              ref={password}
              required
              minLength="6"
            />
            <input
              placeholder="Password Again"
              type="password"
              className="login-input"
              ref={passwordAgain}
              required
              minLength="6"
            />
            <button className="login-button" type="submit">
              Sign Up
            </button>
          </form>
          <button className="login-button register">Log into Account</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
