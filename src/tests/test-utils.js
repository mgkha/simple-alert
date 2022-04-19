import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../theme";

const Providers = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
};

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";

export { customRender as render };
