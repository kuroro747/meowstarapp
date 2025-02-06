import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(240, 248, 255, 1) 100%
  );
  font-family: "Varela Round", "Comic Sans MS", "Segoe UI", sans-serif;
`;

export const Header = styled.header`
  width: 100%;
  padding: 1.5rem 0;
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
  background: transparent;
  box-sizing: border-box;
  font-family: "Varela Round", "Comic Sans MS", "Segoe UI", sans-serif;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 120px;
    right: 120px;
    height: 1.5px;
    background-color: rgba(168, 212, 255, 0.7);
  }

  .left-container {
    margin-left: 120px;
    padding-right: 20px;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .right-container {
    margin-right: 120px;
    padding-left: 20px;
    height: 100%;
    display: flex;
    gap: 2vw;
    align-items: center;
  }

  .link-style {
    text-decoration: none;
    color: #666;
    font-size: clamp(16px, 1.8vw, 22px);
    padding: 0.5vw 0;
    transition: all 0.3s ease;

    &:hover {
      color: #4a90e2;
    }
  }
`;

export const MainContent = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 4vh 0;
  box-sizing: border-box;
  font-family: "Varela Round", "Comic Sans MS", "Segoe UI", sans-serif;

  .background-image1 {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    padding: 0 5%;
    position: relative;
    box-sizing: border-box;
  }

  .image1 {
    max-width: min(90%, 800px);
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
    position: relative;
    z-index: 1;
  }

  .image2 {
    max-width: min(90%, 800px);
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
    margin-top: -250px;
    position: relative;
    z-index: 2;
  }

  .link-style {
    text-decoration: none;
    color: #666;
    font-size: clamp(14px, 1.6vw, 20px);
    padding: 1vh 2vw;
    margin: 1vh 0;
    text-align: center;
    transition: all 0.3s ease;

    &:hover {
      color: #4a90e2;
    }
  }

  .form-container {
    width: 100%;
    max-width: min(90%, 300px);
    display: flex;
    flex-direction: column;
    gap: 1vh;
    padding: 2vh 0;
  }

  .input-field {
    width: 100%;
    padding: clamp(8px, 1.2vh, 12px);
    font-size: clamp(14px, 1.2vw, 16px);
    border: 1px solid #e0e9f5;
    border-radius: 0;
    background-color: rgba(255, 255, 255, 0.8);
    transition: all 0.3s ease;

    &::placeholder {
      color: #a8b8c8;
    }

    &:focus {
      outline: none;
      border-color: #4a90e2;
      background-color: white;
      box-shadow: 0 2px 8px rgba(74, 144, 226, 0.1);
    }
  }

  .submit-button {
    width: 100%;
    padding: clamp(8px, 1.2vh, 12px);
    font-size: clamp(14px, 1.2vw, 16px);
    background-color: #4a90e2;
    color: white;
    border: none;
    border-radius: 0;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #357abd;
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(74, 144, 226, 0.2);
    }
  }

  .links-container {
    display: flex;
    flex-direction: column;
    gap: 1vh;
    margin-top: 100px;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  padding: 2vh;
  text-align: center;
  font-size: clamp(12px, 1.2vw, 16px);
  background: transparent;
  position: relative;
  margin-top: auto;
  box-sizing: border-box;
  font-family: "Varela Round", "Comic Sans MS", "Segoe UI", sans-serif;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 120px;
    right: 120px;
    height: 1.5px;
    background-color: rgba(168, 212, 255, 0.7);
  }

  p {
    color: #666;
    margin: 0;
  }
`;

export const BackgroundImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    width: 1000px;
    height: 1000px;
    background-image: url("/Ellipse6.png");
    background-size: contain;
    background-repeat: no-repeat;
    left: 50%;
    transform: translateX(-65%);
    top: 100px;
    z-index: 1;
    pointer-events: none;
    opacity: 0.8;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

export const BackgroundImageContainer2 = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    width: 1000px;
    height: 1000px;
    background-image: url("/Ellipse7.png");
    background-size: contain;
    background-repeat: no-repeat;
    left: 50%;
    transform: translateX(-65%);
    top: 100px;
    z-index: 1;
    pointer-events: none;
    opacity: 0.8;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;
