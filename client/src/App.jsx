import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Header from './components/Header'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
