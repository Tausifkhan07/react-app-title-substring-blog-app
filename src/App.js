import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderMenu from "./Component/HeaderMenu";
import Services from "./Pages/Services";
import Blog from "./Pages/Blog";
import ErrorPage from "./Pages/ErrorPage";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import BlogDetails from "./Component/BlogDetails";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderMenu />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/blogdetails/:Id" element={<BlogDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

