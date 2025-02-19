import './App.css'
import Home from './pages/Home';
import Signup from './pages/Signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home/>} />
        </Routes>
    </Router>
  )
}

export default App
