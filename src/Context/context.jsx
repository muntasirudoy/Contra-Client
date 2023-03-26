import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { authListener, createDocuments, getCurrentUser } from "../dbconfig";

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

        try{
          let users = await getCurrentUser(user.uid)
          setCurrentUser({...users,user})
        }catch(error){

        }
      } else {
        navigate("/");
      }
    });
  }, []);

  return <Store.Provider value={value}>{children} </Store.Provider>;
};
