import { createContext } from "react";
import { useState } from "react";

const Context = createContext();

export function UserProvider({ children }) {

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  return (
    <Context.Provider
      value={{
        username,
        password,
        setUsername,
        setPassword,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;