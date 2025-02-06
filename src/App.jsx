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
import HostVans from "./Pages/Host/HostVans"
import HostVanDetails from "./Pages/Host/HostVanDetails"
import HostVanInfo from "./Pages/Host/HostVanInfo"
import HostVanPricing from "./Pages/Host/HostVanPricing"
import HostVanPhotos from "./Pages/Host/HostVanPhotos"

function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={ <Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans/>} />
          <Route path="/vans/:id" element={<VansDetails />}/>
          <Route path="/host" element={<HostLayout />}>
            <Route index element={<Dashboard/>} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews/>} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetails />}> 
                  <Route index element={<HostVanInfo/>}/>
                  <Route path="details" element={<HostVanInfo/>}/>
                  <Route path="pricing" element={<HostVanPricing/>}/>
                  <Route path="photos" element={<HostVanPhotos/>}/>
            </Route>
          </Route>
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App


