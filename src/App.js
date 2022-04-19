import { Box } from "@mui/material";
import { AlertExample } from "./components/alert-example";
import AlertManager from "./components/alert-manager";

function App() {
  return (
    <div>
      <AlertExample />

      <Box sx={{ position: "absolute", top: 0, right: 0 }}>
        <Box maxWidth="sm">
          <AlertManager />
        </Box>
      </Box>
    </div>
  );
}

export default App;
