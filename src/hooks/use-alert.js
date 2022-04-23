import { useContext, useEffect } from "react";
import { AlertContext } from "../App";

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
