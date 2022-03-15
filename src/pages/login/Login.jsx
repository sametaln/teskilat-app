import './login.css';

const Login = () => {
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
          <div className="login-box">
            <input placeholder="Email" type="email" className="login-input" />
            <input
              placeholder="Password"
              type="password"
              className="login-input"
            />
            <button className="login-button">Log In</button>
            <span className="login-forgot">Forgot Password?</span>
            <button className="login-button register">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
