import Navbar from "./components/Nav/Nav";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Articles from "./pages/Articles";
import ProtectedRoute from "./routes/ProtectedRoute";
import ArticlesPlan from "./pages/ArticlesPlan";
import { Carousel } from "react-bootstrap";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Faq from "./components/Faq/Faq";
import ContactUS from "./components/ContactUs/ContactUs";
import Sitemap from "./components/Sitemap/Sitemap";

import Content from "./components/Content/Content";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/articles" element={<ProtectedRoute />}>
          <Route path="/articles" element={<Articles />} />
        </Route>
        <Route path="/article-plans" element={<ProtectedRoute />}>
          <Route path="/article-plans" element={<ArticlesPlan />} />
        </Route>
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact-us" element={<ContactUS />} />
        <Route path="/sitemap" element={<Sitemap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
