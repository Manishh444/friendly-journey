import { useState } from 'react'
import HomePage from './components/Pages/HomePage';
import { Button, ButtonGroup } from "@chakra-ui/react";
import './App.css'
import { Route, Routes } from 'react-router-dom';
import ChatPage from './components/Pages/ChatPage';
import ChatProvider from './Context/ChatProvider';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ChatProvider>
        <Routes>
          <Route path="/" Component={HomePage} exact />
          <Route path="/chats" Component={ChatPage} />
        </Routes>
      </ChatProvider>
    </div>
  );
}

export default App
