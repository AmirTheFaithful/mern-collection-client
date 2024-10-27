import { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";

import { useThemeContext } from "./context/theme-ctx";
import Navbar from "./components/navbars/2";
import HomePage from "./pages/home";
import ProjectsPage from "./pages/projects";
import CommentsModal from "./components/modals/comments-modal";

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

      {/* Include all modal windows that are waiting for opening */}
      <CommentsModal />
    </>
  );
}
