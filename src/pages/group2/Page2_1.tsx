import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  PageContainer,
  Header,
  MainContent,
  Footer,
  BackgroundImageContainer2,
  StyledButton,
} from "../../styles/SharedStyles";
import styled from "styled-components";

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

const FormButtonStyled = styled(StyledButton)`
  width: 40%;
  max-width: 200px;
  margin: 20px auto;
  display: block;
  text-align: left;
`;

const CompleteButtonStyled = styled(StyledButton)`
  text-align: center;
  margin-top: 40px;
`;

const ModalButtonStyled = styled(StyledButton)`
  width: 80px;
  padding: 8px 16px;
  font-size: 1rem;
`;

const Page2_1: React.FC = () => {
  const navigate = useNavigate();
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedAudio, setSelectedAudio] = useState<File | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<File | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/page2_2", {
      state: {
        description,
        image: selectedImage,
        audio: selectedAudio,
        video: selectedVideo,
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
            <FormButtonStyled type="button" onClick={handleWordClick}>
              {getButtonText("word")}
            </FormButtonStyled>

            <FormButtonStyled
              type="button"
              onClick={() => document.getElementById("image")?.click()}
            >
              {getButtonText("photo")}
            </FormButtonStyled>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={(e) => setSelectedImage(e.target.files?.[0] || null)}
              style={{ display: "none" }}
            />

            <FormButtonStyled
              type="button"
              onClick={() => document.getElementById("audio")?.click()}
            >
              {getButtonText("audio")}
            </FormButtonStyled>
            <input
              id="audio"
              type="file"
              accept="audio/*"
              onChange={(e) => setSelectedAudio(e.target.files?.[0] || null)}
              style={{ display: "none" }}
            />

            <FormButtonStyled
              type="button"
              onClick={() => document.getElementById("video")?.click()}
            >
              {getButtonText("video")}
            </FormButtonStyled>
            <input
              id="video"
              type="file"
              accept="video/*"
              onChange={(e) => setSelectedVideo(e.target.files?.[0] || null)}
              style={{ display: "none" }}
            />

            <CompleteButtonStyled type="submit">complete</CompleteButtonStyled>
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
              <ModalButtonStyled onClick={handleDescriptionSubmit}>
                Submit
              </ModalButtonStyled>
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
