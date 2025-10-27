import { createContext, useContext } from "react";
import type { User } from "./Type";

export const UserContext = createContext<User | undefined>(undefined);

export const useUserContext = () => {
  const user = useContext(UserContext);
  if (user === undefined) {
    throw new Error("useUserContext must be used inside UserContext !");
  }
  return user;
};
