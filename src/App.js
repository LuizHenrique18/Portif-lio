import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './components/pages/Auth/Login'
import Navbar from './layout/Navbar/Navbar'
import Titulo from './layout/Pages/Titulo'
import QuemSouEu from './layout/Pages/QuemSouEu'
import Icon from './layout/Pages/Icon'
import Experiences from './layout/Pages/Experiences'
import Projetos from './layout/Pages/Projetos'
import Contact from './layout/Pages/Contact'
import Footer from './layout/Footer/Footer'

function App() {
  return (
    <Router>
      <Navbar/>
      <Titulo/>
      <QuemSouEu/>
      <Icon/>
      <Experiences/>
      <Projetos/>
      <Contact/>
      <Footer/>
    </Router>
  );
}

export default App;
