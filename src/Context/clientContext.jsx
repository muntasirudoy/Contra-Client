import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authListener, createDocuments, getCurrentUser } from "../dbconfig";
import { Store } from "./context";

export const clientStore = createContext({
  currentClient: null,
});

export const ClientContextProvider = ({ children }) => {
  const [currentClient, setCurrentClient] = useState(null);
  const value = { currentClient, setCurrentClient };
  const navigate = useNavigate();

  useEffect(() => {
    authListener(async (user) => {
      console.log(user);
      if (user){
        setCurrentClient(user);
      } else {
        navigate("/");
      }
    });
  }, []);
 
  return <Store.Provider value={value}>{children} </Store.Provider>;
};
