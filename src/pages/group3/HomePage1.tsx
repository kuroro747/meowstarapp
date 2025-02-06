import React from "react";
import { Link } from "react-router-dom"; // 引入 Link 组件
import { StyledButton } from "../../styles/SharedStyles";

const HomePage1: React.FC = () => {
  return (
    <div className="home-page1">
      <h1>Meow Star</h1>
      <p>2025/01/19</p>
      <p>Sunny 18:32</p>
      <Link to="/page1_3">
        <StyledButton>Next Page {">>"}</StyledButton>
      </Link>

      <Link to="/page1_4">
        Create Your Cat&apos;s Personal Paradise on Meow Star {">"}
      </Link>
      <br></br>
      <Link to="/" className="link-style">
        HomePage
      </Link>
    </div>
  );
};

export default HomePage1;
