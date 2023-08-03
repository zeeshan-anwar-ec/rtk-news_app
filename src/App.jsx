import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/nav-bar";
import { Home } from "./pages/home";
import { Search } from "./pages/search";
import { Page404 } from "./pages/404";
import { About } from "./pages/about";

export const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
};
