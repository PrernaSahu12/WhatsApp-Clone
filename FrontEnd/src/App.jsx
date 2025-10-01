import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import { Link } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
  const [messages, setMessages] = useState({
    1: [
      { text: "Hi Vaishali!", type: "received", timestamps: "12:30 PM" },
      { text: "Hello, how are you?", type: "sent", timestamps: "12:32 PM" },
      { text: "I'm good, thanks 😊", type: "received", timestamps: "12:33 PM" },
    ],
    2: [
      { text: "Hello Prerna!", type: "received", timestamps: "11:15 AM" },
      { text: "Hey! What’s up?", type: "sent", timestamps: "11:16 AM" },
    ],
    3: [
      { text: "See you soon", type: "received", timestamps: "10:45 AM" },
      { text: "Sure Rahul 👍", type: "sent", timestamps: "10:46 AM" },
    ],
    4: [
      { text: "Okay, thanks!", type: "sent", timestamps: "09:30 AM" },
      { text: "You're welcome 😊", type: "received", timestamps: "09:31 AM" },
    ],
    5: [
      { text: "Where are you?", type: "received", timestamps: "Yesterday" },
      { text: "On my way", type: "sent", timestamps: "Yesterday" },
    ],
    6: [
      { text: "Good night 🌙", type: "sent", timestamps: "Yesterday" },
      { text: "Sweet dreams!", type: "received", timestamps: "Yesterday" },
    ],
    7: [
      {
        text: "Let’s catch up tomorrow",
        type: "received",
        timestamps: "2 days ago",
      },
      { text: "Great idea, Karan!", type: "sent", timestamps: "2 days ago" },
    ],
  });
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [chats, setChats] = useState([
    {
      id: 1,
      name: "Vaishali",
      lastMessage: "Hi!",
      time: "12:30 PM",
      lastSeen: "12:30 PM",
      online: true,
    },
    {
      id: 2,
      name: "Prerna",
      lastMessage: "Hello!",
      time: "11:15 AM",
      lastSeen: "11:30 AM",
      online: false,
    },
    {
      id: 3,
      name: "Rahul",
      lastMessage: "See you soon",
      time: "10:45 AM",
      lastSeen: "10:50 AM",
      online: false,
    },
    {
      id: 4,
      name: "Ananya",
      lastMessage: "Okay, thanks!",
      time: "09:30 AM",
      lastSeen: "09:45 AM",
      online: false,
    },
    {
      id: 5,
      name: "Amit",
      lastMessage: "Where are you?",
      time: "Yesterday",
      lastSeen: "Yesterday",
      online: false,
    },
    {
      id: 6,
      name: "Sneha",
      lastMessage: "Good night 🌙",
      time: "Yesterday",
      lastSeen: "Yesterday",
      online: true,
    },
    {
      id: 7,
      name: "Karan",
      lastMessage: "Let’s catch up tomorrow",
      time: "2 days ago",
      lastSeen: "2 days ago",
      online: false,
    },
  ]);

  const selectedContact = chats.find((chat) => chat.id === selectedChatId);
  return (
<div className="overflow-y-auto">
     <Header />
      <Link to="/register" className="text-blue-500 underline">
       
      </Link>
      <div className="h-screen  flex bg-gray-50">
        <Sidebar
          chats={chats}
          selectedChatId={selectedChatId}
          setSelectedChatId={setSelectedChatId}
        />
        <ChatWindow
          messages={messages}
          setMessages={setMessages}
          chatId={selectedChatId}
          setChats={setChats}
          contact={selectedContact}
        />
      </div>
    </div>
  );
}
