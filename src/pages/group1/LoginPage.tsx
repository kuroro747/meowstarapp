//登录页

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  PageContainer,
  Header,
  MainContent,
  Footer,
  StyledButton,
} from "../../styles/SharedStyles";
import styled from "styled-components";

interface UserInfo {
  username: string;
  email: string;
  password: string;
}

const TitleImage = styled.img`
  width: 900px;
  height: auto;
  margin-top: -260px;
  position: relative;
  z-index: 2;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("/Ellipse6.png");
    background-repeat: no-repeat;
    background-position: left bottom;
    background-size: contain;
    z-index: 0;
    pointer-events: none;
    left: -20%;
    bottom: -10%;
  }
`;

const CatImage = styled.img`
  width: 800px;
  height: auto;
  margin-top: 48px;
  position: relative;
  z-index: 1;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
  position: relative;
  z-index: 2;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .input-field {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 0;
    font-size: 1rem;
    font-family: "Mina", sans-serif;
    background: rgba(255, 255, 255, 0.8);

    &:focus {
      outline: none;
      border-color: #60a1d4;
      background: white;
    }
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

    if (!formData.username || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u: UserInfo) =>
        u.username === formData.username && u.password === formData.password
    );

    if (!user) {
      setError("Invalid username or password");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));
    navigate("/");
  };

  return (
    <PageContainer>
      <Header>
        <div className="left-container">
          <Link to="/" className="link-style">
            Home page
          </Link>
        </div>
        <div className="welcome-text">love will find the cat</div>
        <div className="right-container">
          <Link to="/signup" className="link-style">
            sign up
          </Link>
        </div>
      </Header>

      <MainContent>
        <MainContainer>
          <CatImage src="/cats.gif" alt="cat animation" />
          <TitleImage src="/meowwelcome.png" alt="Meow Star" />
          <FormContainer>
            <form onSubmit={handleSubmit}>
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
                style={{ marginTop: "20px" }}
              />
              <StyledButton
                type="submit"
                style={{ marginTop: "40px", width: "100%" }}
              >
                Login
              </StyledButton>
            </form>
          </FormContainer>
        </MainContainer>
      </MainContent>

      <Footer>
        <p style={{ fontSize: "24px" }}>Footer Content</p>
      </Footer>
    </PageContainer>
  );
};

export default LoginPage;
