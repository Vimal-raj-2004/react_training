function Login(props) {
  return (
    <div className="login-box">
      <h1>Welcome Back</h1>
      <p>You are not logged in. Click the button to continue.</p>
      <button className="btn btn-login" onClick={props.onLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
