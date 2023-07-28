import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme/default";
import { GlobalStyle } from "./theme/global";
import { Router } from "./Router";
import { AuthProvider } from "./context/AuthContext";

export function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </AuthProvider>
  );
}
