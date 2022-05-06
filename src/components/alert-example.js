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
import { useRef } from "react";
import { useAlertReducer } from "../hooks/use-alert";

export const AlertExample = () => {
  const [, dispatch] = useAlertReducer();
  const alertTypeRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    dispatch({ type: "append", payload: Object.fromEntries(formData) });
    e.currentTarget.reset();
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
                ref={alertTypeRef}
                defaultValue="info"
                sx={{ marginBottom: 2 }}
                name="alertType"
                labelId="alertType"
                label="Alert Type"
                required
                autoComplete="off"
              >
                <MenuItem value="info">Info</MenuItem>
                <MenuItem value="success">Success</MenuItem>
                <MenuItem value="warning">Warning</MenuItem>
                <MenuItem value="error">Error</MenuItem>
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
