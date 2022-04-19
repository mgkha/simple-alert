import { append, getAlerts, remove } from "../reducers/alert";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

export function useAlertReducer() {
  const alerts = useSelector(getAlerts);

  const addAlert =
    ({ alertTitle, text, alertType, timeLimit, link, id }) =>
    (dispatch) => {
      dispatch(
        append({
          alertTitle,
          text,
          alertType,
          timeLimit: parseInt(timeLimit) || 10,
          link,
          id: id || uuidv4(),
        })
      );
    };

  const removeAlert = (id) => (dispatch) => {
    dispatch(remove(id));
  };
  return { alerts, addAlert, removeAlert };
}
