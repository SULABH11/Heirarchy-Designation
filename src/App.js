import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Profile from './components/Profile';
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} >
      </Route>
    </Routes>

    <Routes>
      <Route path="/profile" element={<Profile />} >
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App