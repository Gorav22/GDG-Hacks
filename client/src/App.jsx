import './App.css'
import Home from './pages/Home';
import Signup from './pages/Signup'
import Library from './pages/Library';
import Chat from './pages/Chat'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/chat" element={<Chat />} />
          <Route path='/library' element={<Library/>}/>
          <Route path="/" element={<Home/>} />
        </Routes>
    </Router>
  )
}

export default App
