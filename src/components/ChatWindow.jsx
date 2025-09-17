import React from "react";
import { useState } from "react";
import Messages from "./Messages";
import ChatInput from "./ChatInput";
import ChatHeader from "./ChatHeader";

export default function ChatWindow({
  messages = {},
  setMessages,
  chats = [],
  chatId,
  setChats,
  contact,
}) {
  const currentChat = chats.find((c) => c.id === chatId);

  const [isTyping, setIsTyping] = useState(false)
  return (
    <div className="w-2/3 flex flex-col">
      <ChatHeader contact={contact} />
      <div className="p-4 font-bold border-b">
        {currentChat?.name || "No Chat Selected"}
      </div>
      <Messages messages={messages} chatId={chatId} />
      <ChatInput
        chatId={chatId}
        messages={messages}
        setMessages={setMessages}
        setChats={setChats}
        setIsTyping ={setIsTyping}
      />
    </div>
  );
}
