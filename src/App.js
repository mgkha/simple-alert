import { Box } from "@mui/material";
import { AlertExample } from "./components/alert-example";
import AlertManager from "./components/alert-manager";
import { AlertProvider } from "./hooks/use-alert";

function App() {
  return (
    <AlertProvider>
      <AlertExample />

      <Box sx={{ position: "absolute", top: 0, right: 0 }}>
        <Box maxWidth="sm">
          <AlertManager />
        </Box>
      </Box>
    </AlertProvider>
  );
}

export default App;
