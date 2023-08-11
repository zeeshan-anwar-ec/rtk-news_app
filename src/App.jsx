import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/nav-bar";
import { Home } from "./pages/home";
import { Search } from "./pages/search";
import { Page404 } from "./pages/404";
import { Business } from "./pages/business";
import { TechCrunch } from "./pages/texh-cruch";

export const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="business" element={<Business />} />
        <Route path="tech-crunch" element={<TechCrunch />} />
        <Route path="search" element={<Search />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
};
