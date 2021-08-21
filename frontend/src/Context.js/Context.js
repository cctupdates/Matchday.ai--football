import { createContext, useContext, useState } from "react";

const Context = createContext();

export function useLocalContext() {
  return useContext(Context);
}

export function ContextProvider({ children }) {
  const [scale, setScale] = useState(10);
  const [seconds, setSeconds] = useState(null);
  const [coorX, setCoorX] = useState(0);
  const [coorY, setCoorY] = useState(0);
  const [btnsA, setBtnsA] = useState([]);
  const [btnsB, setBtnsB] = useState(null);
  const [btnsC, setBtnsC] = useState(null);

  const value = {
    scale,
    setScale,
    seconds,
    setSeconds,
    coorX,
    setCoorX,
    coorY,
    setCoorY,
    btnsA,
    setBtnsA,
    btnsB,
    setBtnsB,
    btnsC,
    setBtnsC,
  }; 

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
