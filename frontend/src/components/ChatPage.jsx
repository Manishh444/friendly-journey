import React, { useEffect } from "react";
import { useState } from "react";

const ChatPage = () => {
  const [chatsData, setchatsData] = useState([]);
  const fecthData = async () => {
    let data = await fetch("http://127.0.0.1:8000/");
    console.log(data)
    let resData = await data.json();
    console.log( resData[0].chatName)
    setchatsData(resData);
  };
  useEffect(() => {
    fecthData();
  }, []);
  return (
    <div>
      {chatsData.map((chat) => {
        return <div key={chat._id}>{chat.chatName}</div>;
      })}
      {/* {chatsData} */}
    </div>
  );
};

export default ChatPage;
