import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState();

  const [password, setPassword] = useState();


  const submitHandler = () => {};

  return (
    <VStack spacing={"5px"}>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
        type={"email"}
          placeholder="Email..."
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={"password"}
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </InputGroup>
      </FormControl>
      <Button
        colorScheme={"green"}
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        login
      </Button>

      <Button variant={"solid"} colorScheme="green"
      width={"100%"} onClick={()=>{
        setEmail("guest@example.com")
        setPassword("123456")
      }}>
        Get Guest user Credentials
      </Button>
    </VStack>
  );
};

export default Login;
