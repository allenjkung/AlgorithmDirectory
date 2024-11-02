import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./services/Theme";

import './App.css';

import Home from "./components/Home";
import APITest from "./components/APITest";
import APITest2 from "./components/APITest2";

function App() {
  return (
    <ChakraProvider value={theme}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/apitest" element={<APITest/>}/>
        <Route path="/apitest2" element={<APITest2/>}/>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
