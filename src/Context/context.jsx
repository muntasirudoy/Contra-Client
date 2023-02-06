import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { authListener, createDocuments } from "../dbconfig";

export const Store = createContext({
  currentUser: null,
});

export const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  const navigate = useNavigate();

  useEffect(() => {
    authListener(async (user) => {
      if (user) {
        await createDocuments(user);
        setCurrentUser(user);
      } else {
        navigate("/");
      }
    });
  }, []);

  return <Store.Provider value={value}>{children} </Store.Provider>;
};
