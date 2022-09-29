import { createContext, useReducer } from "react";
import reducer from "./reducer";
// , useReducer
export const authContext = createContext();

export default function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    isAuth: false,
    error: false,
  });
  return (
    <authContext.Provider value={{ state, dispatch }}>
      {children}
    </authContext.Provider>
  );
}
