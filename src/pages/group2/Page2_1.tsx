import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  PageContainer,
  Header,
  MainContent,
  Footer,
  BackgroundImageContainer2,
} from "../../styles/SharedStyles";
import styled from "styled-components";

const FormButton = styled.button`
  width: 40%;
  max-width: 200px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  font-size: 1.1rem;
  color: rgba(0, 0, 0, 0.8);
  text-align: left;
  margin: 20px auto;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2), 0 1px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: block;

  &:hover {
    background: rgba(255, 255, 255, 0.35);
    transform: translateY(-2px);
  }
`;

const CompleteButton = styled(FormButton)`
  text-align: center;
  background: rgba(74, 144, 226, 0.3);
  color: white;
  font-weight: 500;
  margin-top: 40px;

  &:hover {
    background: rgba(53, 122, 189, 0.4);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 10px 6px;
  border-radius: 8px;
  width: 95%;
  max-width: 400px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

const TextArea = styled.textarea`
  width: 99%;
  min-height: 150px;
  padding: 8px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
  align-items: center;
  justify-content: flex-start;
  width: 99%;
`;

const ModalButton = styled.button`
  padding: 8px 16px;
  background: rgba(74, 144, 226, 0.3);
  backdrop-filter: blur(8px);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  width: 80px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);

  &:hover {
    background: rgba(53, 122, 189, 0.4);
    transform: translateY(-2px);
  }
`;

const Page2_1: React.FC = () => {
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedAudio, setSelectedAudio] = useState<File | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<File | null>(null);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 如果没有输入描述和图片，使用默认值
    const catDescription =
      description ||
      `Lucy is a nine-year-old cat who arrived at Meow Star in October 2024.
She has a beautiful black and white coat, with a distinctive patch of white fur on her chest and belly.
Lucy is quite the character—she loves to scratch the yellow sofa.
Her favorite foods are boiled shrimp and Mimi brand cat treats, which she enjoys with great enthusiasm.`;

    const catImage = selectedImage
      ? URL.createObjectURL(selectedImage)
      : "/lucywink.gif"; // 添加默认图片

    // 创建音频和视频的 URL（如果有上传的话）
    const catAudio = selectedAudio ? URL.createObjectURL(selectedAudio) : null;
    const catVideo = selectedVideo ? URL.createObjectURL(selectedVideo) : null;

    // 导航到 Page2_2 并传递数据
    navigate("/page2_2", {
      state: {
        description: catDescription,
        image: catImage,
        audio: catAudio,
        video: catVideo,
      },
    });
  };

  const handleWordClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleDescriptionSubmit = () => {
    setIsModalOpen(false);
  };

  // 添加一个函数来获取按钮文字
  const getButtonText = (type: string) => {
    switch (type) {
      case "word":
        return description ? "uploaded" : "word";
      case "photo":
        return selectedImage ? "uploaded" : "photo";
      case "audio":
        return selectedAudio ? "uploaded" : "audio";
      case "video":
        return selectedVideo ? "uploaded" : "video";
      default:
        return "";
    }
  };

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
          <img src="/cats3.gif" className="image1" alt="cat animation" />
          <img
            src="/meowwelcome.png"
            className="image2"
            alt="Meowstar welcome"
          />
          <form
            onSubmit={handleSubmit}
            style={{ width: "100%", maxWidth: "500px", padding: "0 20px" }}
          >
            <FormButton type="button" onClick={handleWordClick}>
              {getButtonText("word")}
            </FormButton>

            <FormButton
              type="button"
              onClick={() => document.getElementById("image")?.click()}
            >
              {getButtonText("photo")}
            </FormButton>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={(e) => setSelectedImage(e.target.files?.[0] || null)}
              style={{ display: "none" }}
            />

            <FormButton
              type="button"
              onClick={() => document.getElementById("audio")?.click()}
            >
              {getButtonText("audio")}
            </FormButton>
            <input
              id="audio"
              type="file"
              accept="audio/*"
              onChange={(e) => setSelectedAudio(e.target.files?.[0] || null)}
              style={{ display: "none" }}
            />

            <FormButton
              type="button"
              onClick={() => document.getElementById("video")?.click()}
            >
              {getButtonText("video")}
            </FormButton>
            <input
              id="video"
              type="file"
              accept="video/*"
              onChange={(e) => setSelectedVideo(e.target.files?.[0] || null)}
              style={{ display: "none" }}
            />

            <CompleteButton type="submit">complete</CompleteButton>
          </form>
        </BackgroundImageContainer2>
      </MainContent>

      {isModalOpen && (
        <ModalOverlay onClick={handleModalClose}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <TextArea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Please describe your cat..."
              autoFocus
            />
            <ButtonContainer>
              <ModalButton onClick={handleDescriptionSubmit}>
                Submit
              </ModalButton>
            </ButtonContainer>
          </ModalContent>
        </ModalOverlay>
      )}

      <Footer>
        <p>Footer Content</p>
      </Footer>
    </PageContainer>
  );
};

export default Page2_1;
