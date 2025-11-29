import { createTheme, ThemeProvider } from "@mui/material";
import "../styles.css";
import Page from "./screen/raffle/RaffleScreen";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div
        style={{ height: "100vh", width: "100vw", backgroundColor: "black" }}
        className="App"
      >
        <Page />
      </div>
    </ThemeProvider>
  );
}
