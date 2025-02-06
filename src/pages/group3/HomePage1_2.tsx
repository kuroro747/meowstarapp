import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  PageContainer,
  Header,
  MainContent,
  Footer,
} from "../../styles/SharedStyles";
import styled from "styled-components";

const ChatSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 20px;
  height: calc(100vh - 200px);
`;

const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MessageBubble = styled.div<{ isUser?: boolean }>`
  background-color: ${(props) =>
    props.isUser ? "rgba(227, 242, 253, 0.6)" : "rgba(245, 245, 245, 0.6)"};
  backdrop-filter: blur(4px);
  padding: 10px 15px;
  border-radius: 18px;
  max-width: 70%;
  font-size: clamp(14px, 1.6vw, 16px);
  border-top-left-radius: ${(props) => (props.isUser ? "18px" : "4px")};
  border-top-right-radius: ${(props) => (props.isUser ? "4px" : "18px")};
  margin: ${(props) => (props.isUser ? "0 0 0 auto" : "0 auto 0 0")};
`;

const ChatInput = styled.div`
  padding: 15px;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  display: flex;
  gap: 10px;

  input {
    flex: 1;
    padding: 10px;
    background: rgba(255, 255, 255, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 20px;
    font-size: 14px;
    outline: none;

    &:focus {
      border-color: #4a90e2;
    }
  }

  button {
    background: rgba(74, 144, 226, 0.3);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 20px;
    padding: 10px 20px;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);

    &:hover {
      background: rgba(53, 122, 189, 0.4);
      transform: translateY(-2px);
    }
  }
`;

const ChatContainer = styled.div`
  width: 600px;
  height: 600px;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2), 0 1px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;

  ${ChatMessages} {
    background: transparent;
  }

  ${ChatInput} {
    margin-top: auto;
  }
`;

const ChatMessage = styled.div<{ isUser?: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  flex-direction: ${(props) => (props.isUser ? "row-reverse" : "row")};
  justify-content: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
  padding: ${(props) => (props.isUser ? "0 0 0 10px" : "0 10px 0 0")};
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const CatImage = styled.img`
  width: 400px;
  height: auto;
  object-fit: contain;
`;

const TreatIcon = styled.div`
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  user-select: none;

  img {
    width: 100px;
    height: auto;
    margin-bottom: 8px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  &:active img {
    transform: scale(0.95);
  }
`;

// 修改 MovingBackground 组件
const MovingBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 800px;
    height: 800px;
    background-image: url("/Ellipse7.png"); // 修改路径
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.8;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: floatAround 30s infinite linear;
  }

  @keyframes floatAround {
    0% {
      transform: translate(-50%, -50%) rotate(0deg) scale(1);
    }
    25% {
      transform: translate(-30%, -30%) rotate(90deg) scale(1.1);
    }
    50% {
      transform: translate(-50%, -50%) rotate(180deg) scale(1);
    }
    75% {
      transform: translate(-70%, -70%) rotate(270deg) scale(1.1);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg) scale(1);
    }
  }
`;

const HomePage1_2: React.FC = () => {
  const [message, setMessage] = useState("");
  const [treatCount, setTreatCount] = useState(1);
  const [messages, setMessages] = useState([
    { type: "cat", text: "meow~~" },
    { type: "human", text: "hi~" },
    { type: "human", text: "how was your day on meow star ?" },
    { type: "cat", text: "not bad~~~~heh" },
  ]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, { type: "human", text: message }]);
      setMessage("");

      // 模拟猫咪回复
      setTimeout(() => {
        setMessages((prev) => [...prev, { type: "cat", text: "meow~ meow~" }]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const handleTreatClick = () => {
    setTreatCount((prev) => prev + 1);
  };

  return (
    <PageContainer>
      <MovingBackground />
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

      <MainContent style={{ position: "relative", zIndex: 1 }}>
        <ChatSection>
          <ChatContainer>
            <ChatMessages>
              {messages.map((msg, index) => (
                <ChatMessage key={index} isUser={msg.type === "human"}>
                  <Avatar
                    src={
                      msg.type === "cat"
                        ? "/cat-avatar.jpg"
                        : "/human-avatar.jpg"
                    }
                    alt={msg.type === "cat" ? "Cat" : "Human"}
                  />
                  <MessageBubble isUser={msg.type === "human"}>
                    {msg.text}
                  </MessageBubble>
                </ChatMessage>
              ))}
            </ChatMessages>
            <ChatInput>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
              />
              <button onClick={handleSend}>Send</button>
            </ChatInput>
          </ChatContainer>

          <RightSection>
            <CatImage src="/lucywink.gif" alt="Cat winking" />
            <TreatIcon onClick={handleTreatClick} style={{ cursor: "pointer" }}>
              <img src="/cat-treat.png" alt="Cat treat" />
              <div>Cat treat +{treatCount}</div>
            </TreatIcon>
          </RightSection>
        </ChatSection>
      </MainContent>

      <Footer>
        <p>Footer Content</p>
      </Footer>
    </PageContainer>
  );
};

export default HomePage1_2;
