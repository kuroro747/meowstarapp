import React from "react";
import { Link } from "react-router-dom";
import {
  PageContainer,
  Header,
  MainContent,
  Footer,
  BackgroundImageContainer2,
} from "../../styles/SharedStyles";

const HomePage2: React.FC = () => {
  return (
    <PageContainer>
      <Header>
        <div className="left-container">
          <Link to="/" className="link-style">
            HomePage
          </Link>
        </div>
        <div className="right-container">
          <div></div>
        </div>
      </Header>

      <MainContent>
        <BackgroundImageContainer2 className="background-image1">
          <img src="/cats3.gif" className="image1" alt="cat animation" />
          <img
            src="/meowwelcome.png"
            className="image2"
            alt="Meowstar welcome"
          />
          <p
            style={{
              fontSize: "1.2rem",
              color: "#333",
              maxWidth: "600px",
              textAlign: "center",
              margin: "20px 0 40px",
              lineHeight: "1.6",
            }}
          >
            Please share some descriptions, audio, or video of your cat to help
            us find them on their journey to Meow Star...
          </p>
          <div className="links-container">
            <Link to="/page2_1" className="link-style">
              Cat Information Collection
            </Link>
          </div>
        </BackgroundImageContainer2>
      </MainContent>

      <Footer>
        <p>Footer Content</p>
      </Footer>
    </PageContainer>
  );
};

export default HomePage2;
