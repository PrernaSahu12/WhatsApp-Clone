import { useEffect, useRef } from "react";

export default function Messages({ messages = {}, chatId }) {
  const endRef = useRef(null);
  const ChatMessages = Array.isArray(messages[chatId]) ? messages[chatId] : [];

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [ChatMessages]);

  return (
    <div className="flex-1 p-4 overflow-y-auto space-y-2">
      {ChatMessages.map((msg, index) => (
        <div
          key={index}
          className={`max-w-xs p-2 rounded ${
            msg.type === "sent"
              ? "bg-blue-500 text-white self-end"
              : "bg-gray-300 text-black self-start"
          }`}
        >
          {typeof msg.text === "string" ? msg.text : ""}
          <div className="text-xs text-gray-600 text-right mt-1">
            {typeof msg.timestamps === "string" ? msg.timestamps : ""}
          </div>
        </div>
      ))}
      <div ref={endRef} />
    </div>
  );
}
