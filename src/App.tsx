import React from 'react';
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./services/Theme";

import './App.css';

import Home from "./components/Home";
import SelectionSort from './components/algorithms/SelectionSort';
import BubbleSort from './components/algorithms/BubbleSort';
import InsertionSort from './components/algorithms/InsertionSort';
import MergeSort from './components/algorithms/MergeSort';
import Quicksort from './components/algorithms/QuickSort';
import Heapsort from './components/algorithms/Heapsort';
import CountingSort from './components/algorithms/CountingSort';
import RadixSort from './components/algorithms/RadixSort';
import BucketSort from './components/algorithms/BucketSort';
import APITest from "./components/APITest";
import APITest2 from "./components/APITest2";

function App() {
  return (
    <ChakraProvider value={theme}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/SelectionSort" element={<SelectionSort/>}/>
        <Route path="/BubbleSort" element={<BubbleSort/>}/>
        <Route path="/InsertionSort" element={<InsertionSort/>}/>
        <Route path="/MergeSort" element={<MergeSort/>}/>
        <Route path="/QuickSort" element={<Quicksort/>}/>
        <Route path="/Heapsort" element={<Heapsort/>}/>
        <Route path="/CountingSort" element={<CountingSort/>}/>
        <Route path="/RadixSort" element={<RadixSort/>}/>
        <Route path="/BucketSort" element={<BucketSort/>}/>
        <Route path="/apitest" element={<APITest/>}/>
        <Route path="/apitest2" element={<APITest2/>}/>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
