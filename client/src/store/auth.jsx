import { createContext, useContext, useEffect, useState } from "react";

import { Contact } from "../pages/Contact";


export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  
  const [user, setUser] = useState("");
  const [isLoading,setIsLoading] = useState(true);
  const [services, setServices] = useState([]);
  const authorizationToken = `Bearer ${token}`;

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  
  let isLoggedIn = !!token;
  //console.log("token", token);
  console.log("isLoggedIn ", isLoggedIn);

  //   to check whether is loggedIn or not
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };
  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:5001/api/auth/user", {
        method:"GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
    
      if (response.ok) {
        const data = await response.json();
        console.log("user data", data.userData);
        setUser(data.userData);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    }catch (error) {
      console.error("Error while fetch user data");

    }
  };
  
  const getServiceData = async() => {
    try {
      const response = await fetch("http://localhost:5001/api/data/service", {
       method:"GET",
      });
      if (response.ok) {
        const services = await response.json();
        //console.log(data.msg);
        setServices(services.data);
      }
      console.log("service", response);
    } catch (error) {
      console.log( error);
    }
  };

  useEffect(()=>{
  getServiceData();
  userAuthentication();
  },[]);
  return (
    <AuthContext.Provider 
    value={{
       isLoggedIn, storeTokenInLS, LogoutUser, user, services, authorizationToken,isLoading }}
  >
    {children}
  </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};