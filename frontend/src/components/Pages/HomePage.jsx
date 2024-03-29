import {
  Box,
  Container,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import React, { useEffect } from 'react'
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
import { useNavigate } from "react-router-dom";
import { ChatState } from "../../Context/ChatProvider";
const HomePage = () => {
    const {user, setUser} = ChatState()
    const Navigate = useNavigate();
    useEffect(() => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      setUser(userInfo);
      if (userInfo) {
        Navigate("/chats");
      }
    }, [Navigate]);
  return (
    <Container maxW={"sm"} centerContent>
      <Box
        display={"flex"}
        justifyContent="center"
        p={3}
        bg="white"
        w={"100%"}
        m="10px 0 15px 0"
        borderRadius={"lg"}
        borderWidth="1.5px"
        borderColor="red"
      >
        <Text fontSize={"20px"} fontFamily="Helvetica" color={"green"}>
          Not a whatsapp clone
        </Text>
      </Box>
      <Box
        bg={"white"}
        p={2}
        w="100%"
        borderRadius={"lg"}
        borderWidth="1.5px"
        borderColor={"red"}
      >
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList>
            <Tab width={'50%'}>LOGIN</Tab>
            <Tab width={'50%'}>SIGN UP</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login/>
            </TabPanel>
            <TabPanel>
              <Signup/> 
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default HomePage