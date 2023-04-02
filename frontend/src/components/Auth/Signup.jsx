import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import { useState } from 'react'

const Signup = () => {
  const [ name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword , setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [pic, setPic] = useState(); 

  const postDetails =()=>{}

  const submitHandler = ()=>{}


  
  return (
    <VStack spacing={"5px"}>
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Name..."
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Email..."
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
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {/* <InputRightElement>
          <button>
            </button></InputRightElement> */}
        </InputGroup>
      </FormControl>
      <FormControl id="confirm-password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            type={"password"}
            placeholder="Confirm password"
            onChange={(e) => {
              setConfirmpassword(e.target.value);
            }}
          />
          {/* <InputRightElement>
          <button>
            </button></InputRightElement> */}
        </InputGroup>
      </FormControl>
      <FormControl id="pic" isRequired>
        <FormLabel>Upload Picture</FormLabel>
          <Input
            type={"file"}
            accept="image/*"

            onChange={(e) => {
              postDetails(e.target.files[0]);
            }}
          />
          
      </FormControl>
      <Button colorScheme={"green"}
      width = "100%"
      style={{marginTop:15}}
      onClick={submitHandler}>
        Sign up
      </Button>
    </VStack>
  );
}

export default Signup