import { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";

import { useThemeContext } from "./context/theme-ctx";
import Navbar from "./components/Navbars/1";
import HomePage from "./pages/home-page";
import ProjectsPage from "./pages/projects";

export default function App(): ReactElement {
  const { theme } = useThemeContext();
  const rootElement: HTMLElement = document.getElementById("root")!;
  rootElement.className = `root-${theme}`;

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  );
}
