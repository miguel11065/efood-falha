import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Pratos from './pages/Restaurante'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/pratos/:id" element={<Pratos />} />
  </Routes>
)

export default Rotas
