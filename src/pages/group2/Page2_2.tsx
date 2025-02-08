import React, { useEffect, useState } from "react";
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
  image: File | null;
  audio: File | null;
  video: File | null;
  serverData: any; // 添加服务器数据
  // 移除 lucyId
}

// 添加新的样式组件
const ContentContainer = styled.div`
  backdrop-filter: blur(12px);
  padding: 25px;
  border-radius: 12px;
  max-width: 800px;
  margin: 20px auto;

  h2 {
    margin-bottom: 20px;
    color: rgba(51, 51, 51, 0.9);
  }

  p {
    white-space: pre-line;
    line-height: 1.8;
    color: rgba(68, 68, 68, 0.9);
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

const ServerContent = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(96, 161, 212, 0.3);

  h3 {
    color: rgba(51, 51, 51, 0.9);
    margin-bottom: 15px;
  }

  p {
    color: rgba(68, 68, 68, 0.9);
    line-height: 1.8;
    font-size: 1.1rem;
  }
`;

// 添加新的样式组件
const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 2px dashed #60a1d4;
  margin: 20px 0;
`;

// 修改 LucyContainer 组件样式
const LucyContainer = styled(AvatarContainer)`
  // 继承 AvatarContainer 的样式
`;

const Page2_2: React.FC = () => {
  const location = useLocation();
  // 使用 LocationState 接口来类型化 state
  const { description, image, audio, video, serverData } =
    (location.state as LocationState) || {};
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    if (image) {
      const url = URL.createObjectURL(image);
      setImageUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [image]);

  // 使用传递的数据或默认值
  const catDescription =
    description ||
    `Lucy is a nine-year-old cat who arrived at Meow Star in October 2024.
She has a beautiful black and white coat, with a distinctive patch of white fur on her chest and belly.
Lucy is quite the character—she loves to scratch the yellow sofa.
Her favorite foods are boiled shrimp and Mimi brand cat treats, which she enjoys with great enthusiasm.`;

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
            src="/lucywink2.gif"
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
              <Avatar
                src={imageUrl || "/lucywink2.gif"}
                alt="Cat Avatar"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/lucywink2.gif";
                }}
              />
              <h2>Your Cat's Introduction</h2> {/* 修改文字 */}
            </AvatarContainer>
            <p>{catDescription}</p>

            <Divider />

            <ContentContainer>
              <LucyContainer>
                <Avatar src="/cat-avatar.jpg" alt="Lucy Avatar" />
                <h2>Lucy's Story</h2> {/* 修改文字 */}
              </LucyContainer>
              <p>
                Lucy was a black-and-white female cat born in 2013, who passed
                away on August 5, 2024. She spent her first four months as a
                stray before being adopted by Evelyn. During this time, she
                witnessed the death of a male kitten from her litter in a
                thunderstorm. Lucy was spayed at 9 months old and shared many
                milestones with Evelyn, including college graduation, her first
                job, and two relationships. While Lucy disliked Evelyn's first
                boyfriend and was indifferent to the second, she always knew
                Evelyn loved and cared for her. Her happiest moments were when
                Evelyn opened a can of cat food for her. Independent yet
                affectionate at times, Lucy had a unique understanding of the
                world. Evelyn stayed with her until the end.
              </p>
            </ContentContainer>

            {serverData && (
              <ServerContent>
                <h3>Additional Information</h3>
                <p>{JSON.stringify(serverData, null, 2)}</p>
              </ServerContent>
            )}

            {audio && (
              <div style={{ margin: "20px 0" }}>
                <h3>Cat's Sound</h3>
                <audio controls>
                  <source src={URL.createObjectURL(audio)} type="audio/*" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            )}

            {video && (
              <div style={{ margin: "20px 0" }}>
                <h3>Cat's Video</h3>
                <video
                  controls
                  style={{ maxWidth: "100%", maxHeight: "400px" }}
                >
                  <source src={URL.createObjectURL(video)} type="video/*" />
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
