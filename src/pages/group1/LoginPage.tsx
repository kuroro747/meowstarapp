//登录页

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  PageContainer,
  Header,
  MainContent,
  Footer,
  BackgroundImageContainer,
} from "../../styles/SharedStyles";
import styled from "styled-components";

interface UserInfo {
  username: string;
  email: string;
  password: string;
}

const StyledButton = styled.button`
  width: 100%;
  padding: 12px;
  background: rgba(74, 144, 226, 0.3);
  backdrop-filter: blur(8px);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);

  &:hover {
    background: rgba(53, 122, 189, 0.4);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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
    if (!formData.username || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    // 验证用户
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u: UserInfo) =>
        u.username === formData.username && u.password === formData.password
    );

    if (!user) {
      setError("Invalid username or password");
      return;
    }

    // 登录成功，可以存储登录状态
    localStorage.setItem("currentUser", JSON.stringify(user));

    // 登录成功后跳转到主页
    navigate("/");
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
          <Link to="/signup" className="link-style">
            Sign Up
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
                type="password"
                name="password"
                placeholder="Password"
                className="input-field"
                value={formData.password}
                onChange={handleChange}
              />
              <StyledButton type="submit">Login</StyledButton>
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

export default LoginPage;
