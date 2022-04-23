import { createContext, useContext, useEffect, useReducer } from "react";
import alertReducer from "../reducers/alert-reducer";

const AlertContext = createContext([]);

export const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, []);

  return (
    <AlertContext.Provider value={[state, dispatch]}>
      {children}
    </AlertContext.Provider>
  );
};

export function useAlertReducer() {
  const [state, dispatch] = useContext(AlertContext);

  useEffect(() => {
    state.forEach((al) => {
      setTimeout(() => {
        dispatch({ type: "remove", payload: al.id });
      }, al.timeLimit * 1000);
    });
  }, [state, dispatch]);

  return [state, dispatch];
}
