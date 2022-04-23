import { Box } from "@mui/material";
import { createContext, useReducer } from "react";
import { AlertExample } from "./components/alert-example";
import AlertManager from "./components/alert-manager";
import alertReducer from "./reducers/alert-reducer";

export const AlertContext = createContext([]);

function App() {
  const [state, dispatch] = useReducer(alertReducer, []);

  return (
    <AlertContext.Provider value={[state, dispatch]}>
      <AlertExample />

      <Box sx={{ position: "absolute", top: 0, right: 0 }}>
        <Box maxWidth="sm">
          <AlertManager />
        </Box>
      </Box>
    </AlertContext.Provider>
  );
}

export default App;
