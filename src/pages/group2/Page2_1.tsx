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
    background-image: url("/Ellipse7.png");
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
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
  padding: 0 20px;
  position: relative;
  z-index: 2;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`;

const FormButton = styled(StyledButton)`
  width: 300px;
  height: 80px;
  margin: 8px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  color: black;
  font-size: 24px;
  border: none;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12);
  transition: all 0.3s ease;

  &:hover {
    background: #f8f8f8;
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.12);
  }
`;

const CompleteButton = styled(FormButton)`
  background: transparent;
  box-shadow: none;
  margin-top: 24px;
  margin-bottom: 16px;
  margin-left: auto;
  margin-right: 60px;
  color: #000000;
  font-size: 36px;
  width: auto;
  padding: 0;

  &:hover {
    background: transparent;
    box-shadow: none;
    color: #60a1d4;
  }

  &:active {
    transform: none;
    box-shadow: none;
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
    border-color: #60a1d4;
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

const ModalButton = styled(StyledButton)`
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
          <CatImage src="/cats3.gif" alt="cat animation" />
          <FormContainer>
            <form onSubmit={handleSubmit}>
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
          </FormContainer>
        </MainContainer>
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
        <p style={{ fontSize: "24px" }}>Footer Content</p>
      </Footer>
    </PageContainer>
  );
};

export default Page2_1;
