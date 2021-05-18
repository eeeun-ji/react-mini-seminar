import React, { useState, useCallback } from 'react';
import logo from './logo.svg';
import "antd/dist/antd.css";
import './App.css';

import {Layout} from "antd";
import BodyArea from './components/BodyArea';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const myFunction = useCallback (() => {
    setText("Hi Hello~!");
  },[]);
   //함수가 재할당 되지 않는다., 리랜더링 

  return (
    <>
    <Header text={text} callback={myFunction}/>
    <BodyArea />
    <Footer />
    </>
  );
}

export default App;