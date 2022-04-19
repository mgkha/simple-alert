import {
  TextField,
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Container,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { ALERT_TYPES } from "../reducers/alert";
import { useDispatch } from "react-redux";
import { useAlertReducer } from "../hooks/use-alert";

export const AlertExample = () => {
  const [alertType, setAlertType] = useState("");
  const dispatch = useDispatch();
  const { addAlert } = useAlertReducer();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    dispatch(
      addAlert({
        alertTitle: data.get("alertTitle"),
        text: data.get("text"),
        link: data.get("link"),
        timeLimit: data.get("timeLimit"),
        alertType: data.get("alertType"),
      })
    );
    e.currentTarget.reset();
    setAlertType("");
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Simple Alert
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <TextField
            sx={{ marginBottom: 2 }}
            name="alertTitle"
            label="Title"
            variant="outlined"
            autoComplete="off"
          />
          <TextField
            sx={{ marginBottom: 2 }}
            name="text"
            label="Text"
            variant="outlined"
            required
            autoComplete="off"
          />
          <TextField
            sx={{ marginBottom: 2 }}
            name="link"
            label="Link"
            variant="outlined"
            autoComplete="off"
          />

          <TextField
            sx={{ marginBottom: 2 }}
            name="timeLimit"
            label="Time Limit"
            variant="outlined"
            type="number"
            autoComplete="off"
          />

          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="alertType">Alert Type</InputLabel>
              <Select
                sx={{ marginBottom: 2 }}
                name="alertType"
                labelId="alertType"
                label="Alert Type"
                value={alertType}
                onChange={(e) => setAlertType(e.target.value)}
                required
                autoComplete="off"
              >
                {Object.values(ALERT_TYPES).map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Button variant="contained" type="submit">
            Add Alert
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
