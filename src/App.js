import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './components/pages/Auth/Login'
import Navbar from './layout/Navbar/Navbar'
import Titulo from './layout/Pages/Titulo'
import QuemSouEu from './layout/Pages/QuemSouEu'

function App() {
  return (
    <Router>
      <Navbar/>
      <Titulo/>
      <QuemSouEu/>
    </Router>
  );
}

export default App;
