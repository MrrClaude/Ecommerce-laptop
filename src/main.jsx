import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ThemeContext, { ThemeProvider } from "./context/themeProvder.jsx";
import { ProductProvider } from "./context/productProvider.jsx";
import Gaming from "./ProductPages/Gaming.jsx";
import CardModal from "./component/CardModal.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
