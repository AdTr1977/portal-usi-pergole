import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Produse from './pages/Produse.jsx'
import ProdusUsi from './pages/ProdusUsi.jsx'
import ProdusPergole from './pages/ProdusPergole.jsx'
import Configurator from './pages/Configurator.jsx'
import ConfiguratorUsi from './pages/ConfiguratorUsi.jsx'
import ConfiguratorPergole from './pages/ConfiguratorPergole.jsx'
import Portofoliu from './pages/Portofoliu.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produse" element={<Produse />} />
        <Route path="/produse/usi" element={<ProdusUsi />} />
        <Route path="/produse/pergole" element={<ProdusPergole />} />
        <Route path="/configurator" element={<Configurator />} />
        <Route path="/configurator/usi" element={<ConfiguratorUsi />} />
        <Route path="/configurator/pergole" element={<ConfiguratorPergole />} />
        <Route path="/portofoliu" element={<Portofoliu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}
