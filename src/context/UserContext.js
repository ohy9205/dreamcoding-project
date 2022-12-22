import React, { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({});

  return <UserContext.Provider>{children}</UserContext.Provider>;
}
