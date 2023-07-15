import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme/default";
import { GlobalStyle } from "./theme/global";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}
