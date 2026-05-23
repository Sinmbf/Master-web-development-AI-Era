import { useState } from "react";
import ChatMessage from "./ChatMessage";
import Message from "./Message";

const Chat = () => {
  const [chat, setChat] = useState(null);
  return (
    <div className="h-max lg:h-screen flex flex-col">
      {/* Messages */}
      <div className="flex-1 flex flex-col gap-5 lg:overflow-y-scroll scrollbar-thin h-full">
        <h1 className="text-2xl font-semibold">Messages</h1>
        {/* Message */}
        <Message
          img="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          name="John Doe"
          msg="Lorem ipsum, dolor sit..."
          setChat={setChat}
        />
        <Message
          img="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          name="John Doe"
          msg="Lorem ipsum, dolor sit..."
          setChat={setChat}
        />
        <Message
          img="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          name="John Doe"
          msg="Lorem ipsum, dolor sit..."
          setChat={setChat}
        />
        {/* Message */}
        <Message
          img="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          name="John Doe"
          msg="Lorem ipsum, dolor sit..."
          setChat={setChat}
        />
        {/* Message */}
        <Message
          img="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          name="John Doe"
          msg="Lorem ipsum, dolor sit..."
          setChat={setChat}
        />
        {/* Message */}
        <Message
          img="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          name="John Doe"
          msg="Lorem ipsum, dolor sit..."
          setChat={setChat}
        />
        {/* Message */}
        <Message
          img="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          name="John Doe"
          msg="Lorem ipsum, dolor sit..."
          setChat={setChat}
        />
      </div>
      {/* Chat Box */}
      {chat && (
        <div className="flex-1 flex flex-col justify-between border border-amber-300">
          {/* Top Section */}
          <div className="flex bg-[#f7c14b85] items-center justify-between p-4">
            {/* User */}
            <div className="">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className="w-10 h-10 object-cover rounded-full mr-2"
              />
              <span>John Doe</span>
              {/* Close button */}
            </div>
            <div className="cursor-pointer" onClick={() => setChat(null)}>
              X
            </div>
          </div>
          {/* Chat Section */}
          <div className="flex flex-col gap-3 h-62.5 overflow-y-scroll scrollbar-thin bg-red-100 p-3">
            {/* Chat Message */}
            <ChatMessage msg="Lorem ipsum dolor sit amet." time="1 hour ago" />
            {/* Chat Message */}
            <ChatMessage
              msg="Lorem ipsum dolor sit amet."
              time="1 hour ago"
              party="receiver"
            />
            {/* Chat Message */}
            <ChatMessage msg="Lorem ipsum dolor sit amet." time="1 hour ago" />
            {/* Chat Message */}
            <ChatMessage
              msg="Lorem ipsum dolor sit amet."
              time="1 hour ago"
              party="receiver"
            />
            {/* Chat Message */}
            <ChatMessage msg="Lorem ipsum dolor sit amet." time="1 hour ago" />
            {/* Chat Message */}
            <ChatMessage
              msg="Lorem ipsum dolor sit amet."
              time="1 hour ago"
              party="receiver"
            />
          </div>
          {/* Bottom Section */}
          <div className="border-t-2 border-[#f7c14b85] flex items-center h-15 justify-between">
            <textarea name="" id="" className="flex-3 h-full"></textarea>
            <button className="flex-1 py-3 bg-[#FADA9B] cursor-pointer h-full hover:bg-yellow-400 transition-colors duration-300">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
