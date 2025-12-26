import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { Toaster } from "./components/ui/sonner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BookingPage from "./pages/BookingPage";
import ServicesPage from "./pages/ServicesPage";
import GalleryPage from "./pages/GalleryPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename="/ramisalon">
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
          <Toaster />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
