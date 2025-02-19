import './App.css'
import Signup from './pages/Signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<h1>Welcome to my App</h1>} />
        </Routes>
    </Router>
  )
}

export default App
