import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Main from "./pages/Main";
import Industry from "./pages/Industry";
import Research from "./pages/Research";
import Academics from "./pages/Academics";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/industry":
        title = "Industry";
        metaDescription = "";
        break;
      case "/research":
        title = "Research";
        metaDescription = "";
        break;
      case "/academics":
        title = "Academics";
        metaDescription = "";
        break;
      case "/projects":
        title = "Projects";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/industry" element={<Industry />} />
      <Route path="/research" element={<Research />} />
      <Route path="/academics" element={<Academics />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  );
}
export default App;
