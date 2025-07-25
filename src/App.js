import React from "react";
<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavSection from "./components/NavSection"; // Corrected import (no destructuring)
import HomePage from "./pages/Home/HomePage";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Project from "./pages/Project/Project";

const App = () => {
  return (
    <BrowserRouter>
      <NavSection />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </BrowserRouter>
=======
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, TodayDeals } from "./components";
import {
  AboutUs,
  Cart,
  ContactUs,
  CookiePolicy,
  FAQPage,
  ForgotPassword,
  Home,
  Login,
  PrivacyPolicy,
  ProductDetails,
  Signup,
  TermsOfService,
  CheckoutPage, // ✅ Add your new payment page
} from "./pages";
import { ToastContainer } from "react-toastify";


const App = () => {
  return (
    <Provider store={store}>
      <ToastContainer position="top-center" />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutPage />} />{" "}
            {/* ✅ Payment Page */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/deals" element={<TodayDeals />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/faqs" element={<FAQPage />} />
            <Route path="/cookies" element={<CookiePolicy />} />
          </Routes>
        </BrowserRouter>
    </Provider>
>>>>>>> 4da22c2cd887abafa7bdba6f488aceb51870f07e
  );
};

export default App;
