import React, { useContext, useState } from "react";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Footer from "./component/Footer";
import ThemeContext from "./context/themeProvder";
import Service from "./pages/Service";
import Gaming from "./ProductPages/Gaming";
import AddToCartModal from "./component/AddToCartModal";
import PaymentPage from "./component/PaymentPage";
import Page404 from "./pages/page404";
// import Business from "./ProductPages/Business";
// import Accessories from "./ProductPages/Accessories";

const App = () => {
  const { theme } = useContext(ThemeContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <div className={`${theme}`}>
      <nav>
        <Navbar onOpenCart={() => setIsCartOpen(true)} />
        <AddToCartModal
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        />
      </nav>
      <main className="h-[100%]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/gaming" element={<Gaming />} />
          {/* <Route path="/business" element={<Business/>}/>
          <Route path="/accessories" element={<Accessories/>}/> */}
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/service" element={<Service />} />
           <Route path="/payment" element={<PaymentPage />} />
           <Route path="/page404" element={<Page404/>}/>
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
