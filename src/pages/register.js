import React, { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form">
        <label for="name">Full Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="name"
          placeholder="John Doe"
          id="name"
          name="name"
        />
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
        <button>Register</button>
      </form>
      <button className="link-btn">Already have an account? Login Here</button>
    </div>
  );
}
