import { createContext, useContext, useState } from "react";

const Context = createContext();

export function useLocalContext() {
  return useContext(Context);
}
//aman branch
export function ContextProvider({ children }) {
  const [scale, setScale] = useState(10);

  const value = {
    scale,
    setScale,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>
}