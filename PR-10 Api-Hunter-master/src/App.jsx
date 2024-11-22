import { BrowserRouter, Route, Routes } from "react-router-dom"
import Fetch from "./Fetch"
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from "./Axios"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Fetch/>} />
          <Route path="/Axios" element={<Axios/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
