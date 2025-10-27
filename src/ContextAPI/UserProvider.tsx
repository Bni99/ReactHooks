import { useState, type ReactNode } from "react";
import { UserContext } from "./UserContext";
import type { User } from "./Type";

type UserProviderProps = {
  children: ReactNode;
};

const UserProvider = ({ children }: UserProviderProps) => {
  const [user] = useState<User>({
    name: "John",
    age: 27,
  });
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
