import Stack from "@mui/material/Stack";
import { useAlertReducer } from "../hooks/use-alert";
import { AlertComponent } from "./alert-component";
import { Box } from "@mui/system";

export default function AlertManager() {
  const [state] = useAlertReducer();

  return (
    <Box sx={{ marginTop: "10px", marginRight: "10px" }}>
      <Stack sx={{ width: "25vw" }} spacing={1}>
        {state.map((al) => (
          <AlertComponent id={al.id} key={al.id} {...al} />
        ))}
      </Stack>
    </Box>
  );
}
