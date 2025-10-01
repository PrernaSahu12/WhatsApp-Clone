import { useState } from "react";
import { useRef } from "react";
import socket from "../socket";
const ChatInput = ({
  chatId,
  messages,
  setMessages,
  setChats,
  setIsTyping,
  user,
  
}) => {
  const [input, setInput] = useState("");
  const typingTimeOutRef = useRef(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

 const handleInputChange = (e) => {
  setInput(e.target.value);
  setIsTyping(true);

  if (!chatId || !user) return; // safety check

  socket.emit("typing", { chatId, userId: user._id });

  clearTimeout(typingTimeOutRef.current);
  typingTimeOutRef.current = setTimeout(() => {
    setIsTyping(false);
  }, 1000);}
  const sendMessage = () => {
    if (!input || !input.trim()) return;

    const timestamps = new Date().toLocaleTimeString();

    const newMessage = {
      id: Date.now(),
      text: input,
      type: "sent",
      timestamps: timestamps,
    };
socket.emit("sendMessage",newMessage)

    setMessages((prev) => ({
      ...prev,
      [chatId]: [...(prev[chatId] || []), newMessage],
    }));

    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === chatId
          ? { ...chat, lastMessage: input, time: timestamps, online: true }
          : chat
      )
    );

    setInput("");
    setIsTyping(false);
  };

  return (
    <div className="p-4 border-t flex items-center space-x-2 relative">
      <button onClick={() => setShowEmojiPicker((prev) => !prev)}>😊</button>
      {showEmojiPicker && (
        <div className="absolute -top-40  bottom-12 left-0 bg-white z-10 border p-2 rounded shadow">
          {["😊", "😂", "❤️", "👍", "🎉"].map((emoji) => (
            <span
              key={emoji}
              className="text-xl m-1 cursor-pointer"
              onClick={() => {
                setInput((prev) => prev + emoji);
                setShowEmojiPicker(false);
              }}
            >
              {emoji}
            </span>
          ))}
        </div>
      )}
      <label htmlFor="fileInput" className="cursor-pointer text-xl">
        📎
      </label>
      <input
        type="file"
        id="fileInput"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            setInput((prev) => prev + `[${file.name}]`);
          }
        }}
      />
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Type a message"
        className="flex-1 border rounded px-2 py-1 mr-2"
      />
      <button
        onClick={sendMessage}
        className="bg-blue-500 text-white px-4 py-1 rounded"
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
