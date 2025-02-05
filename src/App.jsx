import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Vans from "./Pages/Vans"
import Layout from "./components/Layout"
import Dashboard from "./Pages/Host/Dashboard"
import Reviews from "./Pages/Host/Reviews"
import Income from "./Pages/Host/Income"
import "./server"
import VansDetails from "./Pages/VansDetails"
import HostLayout from "./components/HostLayout"

function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route element={ <Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans/>} />
          <Route path="/vans/:id" element={<VansDetails />}/>
          <Route path="/host" element={<HostLayout />}>
            <Route index element={<Dashboard/>} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews/>} />
          </Route>
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App


