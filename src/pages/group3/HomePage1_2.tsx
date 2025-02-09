import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  PageContainer,
  Header,
  MainContent,
  Footer,
  StyledButton,
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
  scroll-behavior: smooth;
`;

// 修改使用 $isUser 替代 isUser
const MessageBubble = styled.div<{ $isUser?: boolean }>`
  background-color: ${(props) =>
    props.$isUser ? "rgba(227, 242, 253, 0.6)" : "rgba(245, 245, 245, 0.6)"};
  backdrop-filter: blur(4px);
  padding: 10px 15px;
  border-radius: 18px;
  max-width: 70%;
  font-size: clamp(14px, 1.6vw, 16px);
  border-top-left-radius: ${(props) => (props.$isUser ? "18px" : "4px")};
  border-top-right-radius: ${(props) => (props.$isUser ? "4px" : "18px")};
  margin: ${(props) => (props.$isUser ? "0 0 0 auto" : "0 auto 0 0")};
`;

const ChatInput = styled.div`
  padding: 15px;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  display: flex;
  gap: 10px;
  align-items: center;

  input {
    flex: 1;
    padding: 10px;
    height: 20px;
    background: rgba(255, 255, 255, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 0;
    font-size: 14px;
    outline: none;
    line-height: 20px;

    &:focus {
      outline: none;
      border: 1px solid rgba(255, 255, 255, 0.6);
      background: rgba(255, 255, 255, 0.5);
    }
  }

  ${StyledButton} {
    padding: 10px 20px;
    font-size: 14px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
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

// 修改使用 $isUser 替代 isUser
const ChatMessage = styled.div<{ $isUser?: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  flex-direction: ${(props) => (props.$isUser ? "row-reverse" : "row")};
  justify-content: ${(props) => (props.$isUser ? "flex-end" : "flex-start")};
  padding: ${(props) => (props.$isUser ? "0 0 0 10px" : "0 10px 0 0")};
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
    background-image: url("/meowstarapp/Ellipse7.png"); // 使用相对路径
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

const defaultCatResponses = [
  "喵~ 今天天气真好呢！",
  "我刚刚抓到了一只小飞虫！",
  "主人，我饿了...",
  "让我想想...喵喵喵~",
  "你说得对，不过我更想睡觉",
  "要不要一起玩毛线球？",
];

const catGifs = [
  "/meowstarapp/llucymeoww.gif",
  "/meowstarapp/lucywink2.gif",
  "/meowstarapp/rest.gif",
  "/meowstarapp/sleep.gif",
  "/meowstarapp/tail.gif",
];

const HomePage1_2: React.FC = () => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState("");
  const [treatCount, setTreatCount] = useState(1);
  const [currentCatGif, setCurrentCatGif] = useState(catGifs[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    { type: "cat", text: "meow~~" },
    { type: "human", text: "hi~" },
    { type: "human", text: "how was your day on meow star ?" },
    { type: "cat", text: "not bad~~~~heh" },
  ]);
  const defaultAvatar = "/meowstarapp/cat-avatar.jpg"; // 默认头像路径
  const [catAvatar, setCatAvatar] = useState<string | null>(defaultAvatar);

  useEffect(() => {
    const storedAvatar = localStorage.getItem("catAvatar");
    console.log("Image URL retrieved from localStorage:", storedAvatar); // 调试信息

    let validAvatar = null;
    if (storedAvatar) {
      try {
        new URL(storedAvatar); // 尝试验证 URL 的有效性
        validAvatar = storedAvatar;
      } catch (error) {
        console.error("Invalid URL in localStorage:", storedAvatar);
        validAvatar = null;
      }
    }

    setCatAvatar(validAvatar || defaultAvatar); // 使用有效的头像或默认头像
  }, []);

  const sendMessage = async (text: string) => {
    setIsLoading(true);
    try {
      const messageData = {
        text,
        user: "user",
        system:
          "Lucy was a black-and-white female cat born in 2013, who passed away on August 5, 2024. She spent her first four months as a stray before being adopted by Evelyn. During this time, she witnessed the death of a male kitten from her litter in a thunderstorm. Lucy was spayed at 9 months old and shared many milestones with Evelyn, including college graduation, her first job, and two relationships. While Lucy disliked Evelyn's first boyfriend and was indifferent to the second, she always knew Evelyn loved and cared for her. Her happiest moments were when Evelyn opened a can of cat food for her. Independent yet affectionate at times, Lucy had a unique understanding of the world. She was healthy and agile in her youth but passed away from kidney failure and a weakened immune system in her later years. Evelyn stayed with her until the end. Lucy believes she is Evelyn's pet cat, and after her death, she lives in Meow Star. She does not consider herself to be virtual.",
      };

      console.log("Sending request to server...");
      console.log("Message data:", messageData);

      const response = await fetch(
        "http://54.145.197.118:3000/474e97d0-7b83-0a9b-b4d1-ec3998403541/message",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(messageData),
        }
      );

      console.log("Server response status:", response.status);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Raw server response:", data);

      // 修改数据处理逻辑
      if (Array.isArray(data) && data.length > 0) {
        // 如果返回的是数组，取第一个元素
        const firstResponse = data[0];
        if (typeof firstResponse === "string") {
          return firstResponse;
        } else if (firstResponse && typeof firstResponse.text === "string") {
          return firstResponse.text;
        }
      } else if (data && typeof data.text === "string") {
        // 如果返回的是单个对象
        return data.text;
      }

      // 如果数据格式不符合预期
      console.error("Unexpected response format:", data);
      throw new Error("Invalid response format");
    } catch (error) {
      console.error("Error in sendMessage:", error);
      return defaultCatResponses[
        Math.floor(Math.random() * defaultCatResponses.length)
      ];
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async () => {
    if (message.trim() && !isLoading) {
      const userMessage = message;
      setMessage(""); // 清空输入框

      try {
        // 立即添加用户消息到对话
        setMessages((prev) => [...prev, { type: "human", text: userMessage }]);

        // 显示加载状态
        const loadingMessage = "Thinking..."; // 修改提示信息
        setMessages((prev) => [...prev, { type: "cat", text: loadingMessage }]);

        // 获取服务器响应
        const response = await sendMessage(userMessage);

        // 更新加载消息为实际响应
        setMessages((prev) => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = { type: "cat", text: response };
          return newMessages;
        });
      } catch (error) {
        console.error("Error in handleSend:", error);
        // 更新为默认回复
        setMessages((prev) => {
          const newMessages = [...prev];
          const defaultResponse =
            defaultCatResponses[
              Math.floor(Math.random() * defaultCatResponses.length)
            ];
          newMessages[newMessages.length - 1] = {
            type: "cat",
            text: defaultResponse,
          };
          return newMessages;
        });
      }
    }
  };

  // 添加动图切换效果
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * catGifs.length);
      setCurrentCatGif(catGifs[randomIndex]);
    }, 10000); // 改为每10秒切换一次

    return () => clearInterval(interval); // 清理定时器
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
                <ChatMessage key={index} $isUser={msg.type === "human"}>
                  <Avatar
                    src={
                      msg.type === "cat"
                        ? catAvatar || defaultAvatar // 确保 catAvatar 有值，否则使用默认头像
                        : "/meowstarapp/human-avatar.jpg"
                    }
                    alt={msg.type === "cat" ? "Cat" : "Human"}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = defaultAvatar; // 确保在头像加载失败时使用默认头像
                    }}
                  />
                  <MessageBubble $isUser={msg.type === "human"}>
                    {msg.text}
                  </MessageBubble>
                </ChatMessage>
              ))}
              <div ref={messagesEndRef} />
            </ChatMessages>
            <ChatInput>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
              />
              <StyledButton onClick={handleSend}>Send</StyledButton>
            </ChatInput>
          </ChatContainer>

          <RightSection>
            <CatImage
              src={currentCatGif}
              alt="Cat Animation"
              style={{
                transition: "opacity 0.5s ease-in-out", // 添加淡入淡出效果
              }}
            />
            <TreatIcon onClick={handleTreatClick} style={{ cursor: "pointer" }}>
              <img src="/meowstarapp/cat-treat.png" alt="Cat treat" />
              <div>Cat treat +{treatCount}</div>
            </TreatIcon>
          </RightSection>
        </ChatSection>
      </MainContent>

      <Footer>
        <p
          style={{
            color: "rgba(96, 161, 212, 0.6)",
            fontSize: "20px", // 调整字体大小
            fontWeight: "400",
          }}
        >
          Cats are called Meow Starians, and when they pass away, it's said
          they’ve returned to Meow Star.
        </p>
      </Footer>
    </PageContainer>
  );
};

export default HomePage1_2;
