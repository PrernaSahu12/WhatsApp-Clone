import React, { useState, useEffect, useRef } from "react";
import Messages from "./Messages";
import ChatInput from "./ChatInput";
import ChatHeader from "./ChatHeader";

export default function ChatWindow({
  messages = [],
  setMessages,
  chats = [],
  chatId,
  setChats,
  contact,
}) {
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  const currentChat = chats.find((c) => c.id === chatId || c._id === chatId);

  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, chatId]); 

  useEffect(() => {
    setIsTyping(false);
  }, [chatId]);

  return (
<div className="w-2/3 flex-shrink-0 flex flex-col h-full 
                border-l dark:bg-gray-900 
                text-black dark:text-white">
      <ChatHeader contact={contact} isTyping={isTyping} />
      
      <div className="p-4 font-bold border-b">
        {currentChat?.name || "No Chat Selected"}
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <Messages messages={messages} chatId={chatId} />
        <div ref={messagesEndRef}></div>
      </div>

      <ChatInput
        chatId={chatId}
        messages={messages}
        setMessages={setMessages}
        setChats={setChats}
        setIsTyping={setIsTyping}
      />
    </div>
  );
}
