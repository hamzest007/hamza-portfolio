import {BrowserRouter , Routes , Route } from "react-router-dom";
import {AboutPage , ContactPage , HomePage, ProjectsPage} from "./pages"
import {NavSection } from "./components"

const App = () => {
  return (
    <BrowserRouter>
        <NavSection />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />

        </Routes>
    </BrowserRouter>
  );
};

export default App;
