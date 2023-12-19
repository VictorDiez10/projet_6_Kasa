import '../styles/app.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accueil from '../page/Accueil.jsx'
import Propos from '../page/A_propos.jsx'
import Error from '../page/Error.jsx'
import Location from "../page/Location.jsx"
import "../styles/responsive.scss"

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/a-propos" element={<Propos />} />
        <Route path="*" element={<Error />}/>
        <Route path="/logement/:id" element={<Location/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App