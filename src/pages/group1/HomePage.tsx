//HomePage

import React, { useEffect, useState } from "react";
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

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-top: 132px;
  position: relative;
  z-index: 2;

  .link-style {
    font-size: 36px;
    color: #000000;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #60a1d4;
      text-decoration: none;
    }
  }
`;

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
      <Header>
        <div className="left-container">
          <Link to="/" className="link-style">
            Home page
          </Link>
        </div>
        <div className="welcome-text">love will find the cat</div>
        <div className="right-container">
          {currentUser ? (
            <>
              <span style={{ color: "#666", fontSize: "24px" }}>
                Welcome, {currentUser.username}
              </span>
              <StyledButton
                onClick={handleLogout}
                style={{
                  padding: "8px 24px",
                  fontSize: "24px",
                }}
              >
                Logout
              </StyledButton>
            </>
          ) : (
            <>
              <Link to="/login" className="link-style">
                login
              </Link>
              <Link to="/signup" className="link-style">
                sign up
              </Link>
            </>
          )}
        </div>
      </Header>

      <MainContent>
        <MainContainer>
          <CatImage src="/cats.gif" alt="cat animation" />
          <TitleImage src="/meowwelcome.png" alt="Meow Star" />
          <LinksContainer>
            <Link to="/homepage1_2" className="link-style">
              see what your cat is doing on Meow star
            </Link>
            <Link to="/homepage2" className="link-style">
              search for your cat
            </Link>
          </LinksContainer>
        </MainContainer>
      </MainContent>

      <Footer>
        <p style={{ fontSize: "24px" }}>Footer Content</p>
      </Footer>
    </PageContainer>
  );
};

export default HomePage;
