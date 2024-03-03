import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Snap from './pages/Snap';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="app bg-whiteBackground">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectTitle" element={<ProjectDetail />} /> 
          <Route path="/about" element={<About  />} />
          <Route path="/snap" element={<Snap  />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
