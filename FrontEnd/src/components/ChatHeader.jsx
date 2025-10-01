// import { Phone, Video, MoreVertical } from "lucide-react";

// ChatHeader.jsx
function ChatHeader({ contact }) {
  return (
    <div className="flex  items-center justify-between px-4 py-3 bg-gray-100 border-b">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
          {contact?.name?.charAt(0)}
        </div>
        <div>
          <h2 className="font-semibold text-gray-800">{contact?.name}</h2>
          <p className="text-sm text-gray-500">
            {contact?.online ? "online" : `last seen ${contact?.lastSeen}`}
          </p>
        </div>
      </div>
      <div className="flex gap-4 text-gray-600">
   
      </div>
    </div>
  );
}


export default ChatHeader;
