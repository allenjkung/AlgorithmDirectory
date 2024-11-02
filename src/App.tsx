import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import APITest from "./components/APITest";
import APITest2 from "./components/APITest2";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<APITest/>}/>
          <Route path="/apitest" element={<APITest/>}/>
          <Route path="/apitest2" element={<APITest2/>}/>
      </Routes>
    </div>
  );
}

export default App;
