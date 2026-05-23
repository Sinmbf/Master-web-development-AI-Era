const ChatMessage = ({ msg, time, party = "sender" }) => {
  return (
    <div
      className={`${party === "receiver" && "self-end"} bg-white p-2 w-max rounded-lg flex flex-col`}
    >
      <p>{msg}</p>
      <span className="text-gray-500 text-sm text-right">{time}</span>
    </div>
  );
};
export default ChatMessage;
