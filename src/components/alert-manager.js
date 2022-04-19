import Stack from "@mui/material/Stack";
import { useEffect } from "react";
import { useAlertReducer } from "../hooks/use-alert";
import { useDispatch } from "react-redux";
import { AlertComponent } from "./alert-component";
import { Box } from "@mui/system";

export default function AlertManager() {
  const dispatch = useDispatch();
  const { alerts, removeAlert } = useAlertReducer();

  useEffect(() => {
    alerts.forEach((al) => {
      setTimeout(() => {
        dispatch(removeAlert(al.id));
      }, al.timeLimit * 1000);
    });
  }, [dispatch, removeAlert, alerts]);

  return (
    <Box sx={{ marginTop: "10px", marginRight: "10px",  }}>
      <Stack sx={{ width: "25vw" }} spacing={1}>
        {alerts.map((al) => (
          <AlertComponent id={al.id} key={al.id} {...al} />
        ))}
      </Stack>
    </Box>
  );
}
