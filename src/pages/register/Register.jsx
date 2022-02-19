import './register.css';

const Register = () => {
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
            <input placeholder="Username" type="text" className="login-input" />
            <input placeholder="Email" type="email" className="login-input" />
            <input
              placeholder="Password"
              type="password"
              className="login-input"
            />
            <input
              placeholder="Password Again"
              type="password"
              className="login-input"
            />
            <button className="login-button">Sign Up</button>
            <button className="login-button register">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
