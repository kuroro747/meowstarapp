import styled from "styled-components";

export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vw 2vw;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .left-container,
  .right-container {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .link-style {
    color: #666;
    text-decoration: none;
    padding: 0.5vw 1vw;
    border-radius: 4px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

export const MainContent = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

export const Footer = styled.footer`
  padding: 20px;
  background-color: white;
  text-align: center;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`;

export const BackgroundImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;

  .image1 {
    width: 300px;
    height: auto;
    margin-bottom: 20px;
  }

  .image2 {
    width: 400px;
    height: auto;
    margin-bottom: 40px;
  }

  .links-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  .link-style {
    color: #666;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 4px;
    transition: background-color 0.3s;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: #f0f0f0;
    }
  }

  .form-container {
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    .input-field {
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;

      &:focus {
        outline: none;
        border-color: #4a90e2;
      }
    }

    .submit-button {
      padding: 10px;
      background-color: #4a90e2;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;

      &:hover {
        background-color: #357abd;
      }
    }
  }
`;

export const BackgroundImageContainer2 = styled(BackgroundImageContainer)`
  background-image: url("/Ellipse7.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`; 