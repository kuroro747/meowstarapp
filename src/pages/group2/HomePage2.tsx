import React from "react";
import { Link } from "react-router-dom";
import {
  PageContainer,
  Header,
  MainContent,
  Footer,
} from "../../styles/SharedStyles";
import styled from "styled-components";

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
    background-image: url("/meowstarapp/Ellipse7.png"); // 使用相对路径
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
  margin-top: 32px; // 原来的 margin-top: 82px;
  position: relative;
  z-index: 2;
  transform: translateY(-50px); // 向上移动 50px

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

const Description = styled.p`
  font-size: 24px;
  color: #333;
  max-width: 800px;
  text-align: center;
  margin: 40px 0;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`;

const HomePage2: React.FC = () => {
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
          <div></div>
        </div>
      </Header>

      <MainContent>
        <MainContainer>
          <CatImage src="/meowstarapp/cats3.gif" alt="cat animation" />
          <TitleImage src="/meowstarapp/meowwelcome.png" alt="Meow Star" />
          <Description>
            Please share some descriptions, audio, or video of your cat to help
            us find them on their journey to Meow Star...
          </Description>
          <LinksContainer>
            <Link to="/page2_1" className="link-style">
              Cat Information Collection
            </Link>
          </LinksContainer>
        </MainContainer>
      </MainContent>

      <Footer>
        <p
          style={{
            fontSize: "20px", // 调整字体大小
            color: "rgba(96, 161, 212, 0.6)",
            fontWeight: "400",
          }}
        >
          Cats are called Meow Starians, and when they pass away, it's said
          they’ve returned to Meow Star.
        </p>
      </Footer>
    </PageContainer>
  );
};

export default HomePage2;
