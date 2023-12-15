import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './components/pages/Auth/Login'
import Navbar from './layout/Navbar/Navbar'
import Titulo from './layout/Pages/Titulo'

function App() {
  return (
    <Router>
      <Navbar/>
      <Titulo/>
    </Router>
  );
}

export default App;
