import React, { useEffect } from "react";
import { useState } from "react";
import { ChatState } from "../../Context/ChatProvider";
import { Box } from "@chakra-ui/react";
import SideDrawer from "../miscellaneous/SideDrawer";
import MyChats from "../MyChats";
import ChatBox from "../ChatBox";
const ChatPage = () => {
  const {user, setUser} = ChatState()
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer/>}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p='10px'
      >
        { user && <MyChats/>}
        { user && <ChatBox/>}
      </Box>
    </div>
  );
};

export default ChatPage;
