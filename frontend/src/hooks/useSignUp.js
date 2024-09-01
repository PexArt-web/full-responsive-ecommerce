import { useState } from "react";
import useAuthContext from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {dispatch} = useAuthContext()

  const signup = async (name, email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:4000/api/user/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const json = await response.json();

      if (!response.ok) {
        setError(json.error)
        setIsLoading(false)
      }

      if(response.ok){
        // saving user to local storage
        localStorage.setItem("user", JSON.stringify(json))

        // updating auth context for global use
        dispatch({type: 'LOGIN', payload: json})
        setIsLoading(false)
      }

    } catch (error) {
      console.error("Error creating user:", error.message, error);
      setError("Error creating user, check your internet connection and try again")
      setIsLoading(false)
    }
  };

  return { signup, isLoading , error}
};
