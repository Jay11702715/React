// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React, { useEffect, useState, useRef } from 'react';

function useTabBlinkWithColor(message = 'Come back!', interval = 1000) {
  const [isBlinking, setIsBlinking] = useState(false);
  const originalTitle = useRef(document.title); // Store the original title in a ref
  const blinkStep = useRef(0); // Use a ref to avoid unnecessary re-renders

  useEffect(() => {
    let blinkInterval;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsBlinking(true);
      } else {
        setIsBlinking(false);
        document.title = originalTitle.current;
      }
    };

    if (isBlinking) {
      blinkInterval = setInterval(() => {
        blinkStep.current = (blinkStep.current + 1) % 2;
        document.title = blinkStep.current === 0 ? `🔴 ${message}` : `🔵 ${message}`;
      }, interval);
    } else {
      clearInterval(blinkInterval);
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(blinkInterval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.title = originalTitle.current;
    };
  }, [isBlinking, message, interval]);

  return [setIsBlinking];
}


function App() {
  useTabBlinkWithColor('Hey, check this out!');

  const [count, setCount] = useState(15)

  const increaseCount = ()=>{
  setCount(prevCounter => prevCounter + 1)
  setCount(prevCounter => prevCounter + 1)
  setCount(prevCounter => prevCounter + 1)
}

const decreaseCount = ()=> {
  setCount(count-1)
}

  return (
    <>
      <button onClick={increaseCount}>{count}</button>
      <button onClick={decreaseCount}>{count}</button>
    </>
  )
}

export default App
