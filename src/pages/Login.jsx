import React from "react";

function Login() {
  return (
    <div className="login">
      <form>
        <h2>Login to the Kingdom</h2>
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
        <button type="submit">Login</button>
        <p>Forgot password ?</p>
      </form>
    </div>
  );
}

export default Login;
