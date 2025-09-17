

export default function Sidebar({ chats, selectedChatId, setSelectedChatId }) {
  return (
    <div className="w-1/3 border-r border-gray-300 flex flex-col h-screen">
      

      <div className="p-4 font-bold text-xl border-b bg-gray-100">Chats</div>
      <div className="flex flex-col overflow-y-auto flex-1">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => setSelectedChatId(chat.id)}
            className={`p-4 cursor-pointer border-b hover:bg-gray-100 ${
              chat.id === selectedChatId ? "bg-gray-200" : ""
            }`}
          >
            
            <div className="font-semibold">{chat.name}</div>
            <div className="text-sm text-gray-600 truncate">
              {chat.lastMessage}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
