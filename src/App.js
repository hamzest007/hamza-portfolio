import React from "react";

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
} from "./pages";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
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
  );
};

export default App;
