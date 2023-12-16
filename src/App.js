import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './components/pages/Auth/Login'
import Navbar from './layout/Navbar/Navbar'
import Titulo from './layout/Pages/Titulo'
import QuemSouEu from './layout/Pages/QuemSouEu'
import Icon from './layout/Pages/Icon'
import Experiences from './layout/Pages/Experiences'

function App() {
  return (
    <Router>
      <Navbar/>
      <Titulo/>
      <QuemSouEu/>
      <Icon/>
      <Experiences/>
    </Router>
  );
}

export default App;
