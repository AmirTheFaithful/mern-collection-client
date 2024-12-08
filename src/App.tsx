import { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";

import { useThemeContext } from "./context/theme-ctx";
import Navbar from "./components/navbars/2";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
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

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>

      {/* Include all modal windows that are waiting for opening */}
      <CommentsModal />
    </>
  );
}
