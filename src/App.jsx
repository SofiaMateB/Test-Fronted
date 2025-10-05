import Login from "./views/Login";
import Dashboard from "./views/Dashboard";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


import './index.css'

function App() {

  return (
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
  )
}

export default App
