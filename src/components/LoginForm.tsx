//登录表单
import React, { useState } from "react";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert(`Logging in with ${username}`);
  };

  return (
    <div className="form-container">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="UserName"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="PassWord"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
