import ThemeToggle from "./ThemeToggle";
export default function Sidebar({ chats, selectedChatId, setSelectedChatId }) {
  return (
<div className="w-1/3 flex-shrink-0 flex flex-col border-r 
                border-gray-200 dark:border-gray-700 
                bg-white dark:bg-gray-800">
      <div className="p-4 font-bold flex justify-between items-center">
        Chats
      </div>
      <ThemeToggle />
      <div className="flex flex-col  overflow-hidden flex-1">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => setSelectedChatId(chat.id)}
            className={`p-4 cursor-pointer border-b  hover:bg-gray-100 ${
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
