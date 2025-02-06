//注册页
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  PageContainer,
  Header,
  MainContent,
  Footer,
  BackgroundImageContainer,
} from "../../styles/SharedStyles";

interface UserInfo {
  username: string;
  email: string;
  password: string;
}

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // 验证表单
    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // 检查用户名是否已存在
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    if (
      existingUsers.some(
        (user: UserInfo) => user.username === formData.username
      )
    ) {
      setError("Username already exists");
      return;
    }

    // 保存新用户
    const newUser = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };

    localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));

    // 注册成功后跳转到登录页
    navigate("/login");
  };

  return (
    <PageContainer>
      <Header>
        <div className="left-container">
          <Link to="/" className="link-style">
            HomePage
          </Link>
        </div>
        <div className="right-container">
          <Link to="/login" className="link-style">
            Login
          </Link>
        </div>
      </Header>

      <MainContent>
        <BackgroundImageContainer className="background-image1">
          <img src="/cats.gif" className="image1" alt="cat animation" />
          <img
            src="/meowwelcome.png"
            className="image2"
            alt="Meowstar welcome"
          />

          <div className="links-container">
            <form className="form-container" onSubmit={handleSubmit}>
              {error && (
                <div style={{ color: "red", marginBottom: "10px" }}>
                  {error}
                </div>
              )}
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="input-field"
                value={formData.username}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input-field"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input-field"
                value={formData.password}
                onChange={handleChange}
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="input-field"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <button type="submit" className="submit-button">
                Sign Up
              </button>
            </form>
          </div>
        </BackgroundImageContainer>
      </MainContent>

      <Footer>
        <p>Footer Content</p>
      </Footer>
    </PageContainer>
  );
};

export default SignUpPage;
