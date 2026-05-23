const Message = ({ img, name, msg, setChat }) => {
  return (
    <div
      className="flex gap-3 items-center bg-white p-3 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors duration-300"
      onClick={() => setChat(true)}
    >
      <img src={img} alt="" className="w-10 h-10 object-cover rounded-full" />
      <span className="font-bold">{name}</span>
      <p>{msg}</p>
    </div>
  );
};

export default Message;
