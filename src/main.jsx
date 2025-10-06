import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter,  } from "react-router-dom";
import ThemeContext, { ThemeProvider } from "./context/themeProvder.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <ThemeProvider>
     <BrowserRouter>
      <App />
    </BrowserRouter>
   </ThemeProvider>
  </StrictMode>
);
