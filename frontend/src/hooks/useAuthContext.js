import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error(`useAuthContext must be within AuthContextProvider`);
  }
  return context;
};

export default useAuthContext;
