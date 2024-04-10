import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Snap from './pages/Snap';
import ProjectDetail from './components/ProjectDetail';
import ScrollToTop from './UI/ScrollToTop';
import LoaderMain from './UI/loaders/LoaderMain';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return (
    <BrowserRouter>
      <ScrollToTop />
      {isLoading ? (
        <LoaderMain /> 
      ) : (
        <div className="app bg-whiteBackground">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectTitle" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/snap" element={<Snap />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
