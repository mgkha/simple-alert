import { Alert, AlertTitle, Typography } from "@mui/material";

export const AlertComponent = ({ alertTitle, text, alertType, link }) => {
  return (
    <Alert
      severity={alertType}
      sx={{
        cursor: link ? "pointer" : "default",
      }}
      onClick={() => link && window.open(link, "_blank").focus()}
    >
      <AlertTitle color="primary">{alertTitle}</AlertTitle>

      <Typography variant="subtitle1" component="span" color="secondary">
        {text}
      </Typography>
    </Alert>
  );
};
