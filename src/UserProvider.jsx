import { createContext, useState } from "react";

// Context
export const myContext = createContext();

// Provider Component
export default function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "Nguyễn Văn A",
    email: "nva@example.com",
    role: "admin",
  });

  return (
    <myContext.Provider value={{ user, setUser }}>
      {children}
    </myContext.Provider>
  );
}
