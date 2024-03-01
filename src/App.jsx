import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Snap from './components/Snap';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About  />} />
          <Route path="/snap" element={<Snap  />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;