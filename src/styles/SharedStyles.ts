import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 12px 24px;
  background: #60a1d4;
  color: white;
  border: 1px solid #60a1d4;
  border-radius: 0;
  cursor: pointer;
  font-size: 1rem;
  font-family: 'Mina', sans-serif;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(96, 161, 212, 0.2);

  &:hover {
    background: #4a90e2;
    border-color: #4a90e2;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    background: #357abd;
    border-color: #357abd;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export const PageContainer = styled.div`
  min-height: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  font-family: 'Mina', sans-serif;
  overflow: hidden;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 48px;
  background: transparent;
  position: relative;
  font-family: 'Mina', sans-serif;
  flex-shrink: 0;

  .welcome-text {
    position: absolute;
    left: 50%;
    bottom: 15px;
    transform: translateX(-50%);
    font-size: 24px;
    color: rgba(96, 161, 212, 0.6);
    font-weight: 400;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 80px;
    right: 80px;
    height: 1.5px;
    background: rgba(96, 161, 212, 0.5);
  }

  .left-container,
  .right-container {
    display: flex;
    align-items: center;
  }

  .left-container {
    margin-left: 25px;
    .link-style {
      font-size: 36px;
      color: #000000;
      font-weight: 400;
    }
  }

  .right-container {
    display: flex;
    gap: 48px;
    align-items: center;
    margin-right: 25px;

    .link-style {
      font-size: 36px;
      color: #000000;
      font-weight: 400;
      text-transform: lowercase;
    }
  }

  .link-style {
    text-decoration: none;
    padding: 5px 0;
    transition: all 0.3s ease;

    &:hover {
      color: #60a1d4;
      text-decoration: none;
    }
  }
`;

export const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 2vh;
  position: relative;
  background: transparent;
  width: 100%;
  overflow: auto;
  
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(96, 161, 212, 0.3);
    border-radius: 4px;
  }
`;

export const Footer = styled.footer`
  padding: 20px;
  background: transparent;
  text-align: center;
  box-shadow: none;
  color: #666;
  font-family: 'Mina', sans-serif;
  flex-shrink: 0;
  position: relative;
`;

export const BackgroundImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  .image1 {
    width: 600px;
    height: auto;
    margin-bottom: 20px;
  }

  .image2 {
    width: 800px;
    height: auto;
    margin-bottom: 60px;
  }

  .links-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    margin-top: 40px;
  }

  .link-style {
    color: #666;
    text-decoration: none;
    font-size: 1.1rem;
    font-family: 'Mina', sans-serif;
    padding: 10px 20px;
    transition: all 0.3s ease;

    &:hover {
      color: #60a1d4;
      transform: translateY(-2px);
      text-decoration: none;
    }
  }

  .form-container {
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 40px;

    .input-field {
      padding: 12px;
      border: 1px solid #ddd;
      border-radius: 0;
      font-size: 1rem;
      font-family: 'Mina', sans-serif;
      background: rgba(255, 255, 255, 0.8);

      &:focus {
        outline: none;
        border-color: #60a1d4;
        background: white;
      }
    }
  }
`;

export const BackgroundImageContainer2 = styled(BackgroundImageContainer)`
  background-image: url("/Ellipse7.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  opacity: 0.8;
`;