import './login.css';
import { useRef, useContext } from 'react';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from '@mui/material';

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
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
              placeholder="Email"
              type="email"
              className="login-input"
              ref={email}
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
            <button
              className={isFetching ? 'login-loading' : 'login-button'}
              disabled={isFetching}
            >
              {isFetching ? (
                <CircularProgress
                  sx={{
                    color: 'rgb(153, 55, 55)',
                  }}
                  size="2rem"
                />
              ) : (
                'Log In'
              )}
            </button>
            <span className="login-forgot">Forgot Password?</span>
          </form>
          <button className="login-button register">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
