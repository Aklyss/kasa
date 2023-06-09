import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Services from "./pages/Services/Services"
import Logement from "./pages/Logement/Logement"
import Error from './pages/Error/Error'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='AppApp'>
      <div className="App">
        <Header />
        <Routes>
          {/* pour les routes normales */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          {/* pour les routes dynamiques */}
          <Route path="/logement/:id" element={<Logement />} />
          {/* pour l'error 404  */}
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
