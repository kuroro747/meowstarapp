//HomePage

import React, { useEffect, useState } from "react";
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
}

const FootprintBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 1200px;
    height: 1200px;
    background-image: url("/footprint40.gif");
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.8;
    left: 55%;
    top: 70%;
    transform: translate(-50%, -50%) rotate(-15deg);
  }
`;

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<UserInfo | null>(null);

  useEffect(() => {
    const userStr = localStorage.getItem("currentUser");
    if (userStr) {
      setCurrentUser(JSON.parse(userStr));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <PageContainer>
      <FootprintBackground />
      <Header style={{ position: "relative", zIndex: 2 }}>
        <div className="left-container">
          <div></div>
        </div>
        <div className="right-container">
          {currentUser ? (
            <>
              <span style={{ color: "#666" }}>
                Welcome, {currentUser.username}
              </span>
              <button
                onClick={handleLogout}
                className="link-style"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "0.5vw 1vw",
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="link-style">
                Login
              </Link>
              <Link to="/signup" className="link-style">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </Header>

      <MainContent style={{ position: "relative", zIndex: 2 }}>
        <BackgroundImageContainer className="background-image1">
          <img src="/cats.gif" className="image1" alt="cat animation" />
          <img
            src="/meowwelcome.png"
            className="image2"
            alt="Meowstar welcome"
          />

          <div className="links-container">
            <Link to="/homepage1_2" className="link-style">
              see what your cat is doing on Meow star
            </Link>
            <Link to="/homepage2" className="link-style">
              search for your cat
            </Link>
          </div>
        </BackgroundImageContainer>
      </MainContent>

      <Footer style={{ position: "relative", zIndex: 2 }}>
        <p>Footer Content</p>
      </Footer>
    </PageContainer>
  );
};

export default HomePage;
