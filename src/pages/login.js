import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form">
        <label for="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@domain.com"
          id="email"
          name="email"
        />
        <label for="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="******"
          id="password"
          name="password"
        />
        <button>Log in</button>
      </form>
      <button className="link-btn">Don't have an account? Register</button>
    </div>
  );
}
