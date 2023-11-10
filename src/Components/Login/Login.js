import "./styles.css";

const Login = () => {
  return (
    <div className="login-form">
      <h1>Sign In</h1>
      <input type="text" className="login-input" placeholder="User Name..." />
      <input type="password" placeholder="Password" className="login-input" />
      <button type="submit" className="login-btn">
        Sign In
      </button>
    
    </div>
  );
};

export default Login;
