"use client";
import useStore from "../store/messages";

const Notification = () => {
  const { messages, setMessages } = useStore();
  return (
    messages > 0 && (
      <div
        onClick={setMessages}
        className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-white"
      >
        {messages}
      </div>
    )
  );
};

export default Notification;
