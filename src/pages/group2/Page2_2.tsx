import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  PageContainer,
  Header,
  MainContent,
  Footer,
  BackgroundImageContainer2,
} from "../../styles/SharedStyles";
import styled from "styled-components";

interface LocationState {
  description: string;
  image: string;
  audio: string | null;
  video: string | null;
}

// 添加新的样式组件
const ContentContainer = styled.div`
  background: rgba(255, 255, 255, 0.4); // 降低不透明度
  backdrop-filter: blur(12px); // 增加模糊效果
  padding: 25px;
  border-radius: 12px;
  max-width: 800px;
  margin: 20px auto;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2),
    // 增强白色阴影
    0 1px 8px rgba(0, 0, 0, 0.05); // 调整暗色阴影
  border: 1px solid rgba(255, 255, 255, 0.4); // 增加边框透明度

  h2 {
    margin-bottom: 20px;
    color: rgba(51, 51, 51, 0.9); // 调整标题颜色透明度
  }

  p {
    white-space: pre-line;
    line-height: 1.8;
    color: rgba(68, 68, 68, 0.9); // 调整文字颜色透明度
    margin: 0;
    font-size: 1.1rem;
  }
`;

// 添加头像样式组件
const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;

  h2 {
    margin: 0;
  }
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.6);
`;

const Page2_2: React.FC = () => {
  const location = useLocation();
  const state = location.state as LocationState;

  // 使用传递的数据或默认值
  const catDescription =
    state?.description ||
    `Lucy is a nine-year-old cat who arrived at Meow Star in October 2024.
She has a beautiful black and white coat, with a distinctive patch of white fur on her chest and belly.
Lucy is quite the character—she loves to scratch the yellow sofa.
Her favorite foods are boiled shrimp and Mimi brand cat treats, which she enjoys with great enthusiasm.`;

  // 分开处理头像图片和主图片
  const avatarImage = state?.image || "/lucywink.gif";
  const mainImage = "/lucywink.gif"; // 主图片始终使用 lucywink.gif

  return (
    <PageContainer>
      <Header>
        <div className="left-container">
          <Link to="/homepage2" className="link-style">
            HomePage2
          </Link>
        </div>
        <div className="right-container">
          <div></div>
        </div>
      </Header>

      <MainContent>
        <BackgroundImageContainer2 className="background-image1">
          <img
            src={mainImage}
            alt="Cat"
            style={{
              maxWidth: "400px",
              width: "100%",
              height: "auto",
              margin: "20px auto 30px",
              display: "block",
            }}
          />
          <ContentContainer>
            <AvatarContainer>
              <Avatar src={avatarImage} alt="Cat Avatar" />
              <h2>Cat's Introduction</h2>
            </AvatarContainer>
            <p>{catDescription}</p>

            {state?.audio && (
              <div style={{ margin: "20px 0" }}>
                <h3>Cat's Sound</h3>
                <audio controls>
                  <source src={state.audio} type="audio/*" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            )}

            {state?.video && (
              <div style={{ margin: "20px 0" }}>
                <h3>Cat's Video</h3>
                <video
                  controls
                  style={{ maxWidth: "100%", maxHeight: "400px" }}
                >
                  <source src={state.video} type="video/*" />
                  Your browser does not support the video element.
                </video>
              </div>
            )}
          </ContentContainer>

          <Link to="/homepage1_2" className="link-style">
            see what your cat is doing on Meow star
          </Link>
        </BackgroundImageContainer2>
      </MainContent>

      <Footer>
        <p>Footer Content</p>
      </Footer>
    </PageContainer>
  );
};

export default Page2_2;
