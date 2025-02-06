//注册表单
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    if (password === confirmPassword) {
      alert(`Signing up with ${username}`);
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="form-container">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />

      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Re-enter password"
      />

      <button onClick={handleSignUp}>Join</button>
    </div>
  );
};

export default SignUpForm;
