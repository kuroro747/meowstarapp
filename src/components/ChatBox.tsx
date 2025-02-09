import React from "react";
// import React, { useEffect } from "react";

interface ChatBoxProps {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  onSend: () => void;
  messages: { from: string; content: string }[];
  chatBoxRef: React.RefObject<HTMLDivElement>;
}

const ChatBox: React.FC<ChatBoxProps> = ({
  message,
  setMessage,
  onSend,
  messages,
  chatBoxRef,
}) => {
  // 监听键盘回车事件
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && message.trim() !== "") {
      onSend(); // 发送消息
    }
  };

  return (
    <div className="chat-box">
      {/* 消息列表区域 */}
      <div className="messages" ref={chatBoxRef}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.from === "cat" ? "from-cat" : "from-user"
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>

      {/* 输入框 */}
      <div className="input-area">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress} // 监听键盘按下事件
          placeholder="Talk to your cat..."
        />
        <button onClick={onSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
