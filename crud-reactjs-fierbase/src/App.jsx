import { BrowserRouter, Route, Routes } from "react-router-dom"
import Add from "./pages/Add"
import View from "./pages/View"
import Edit from "./pages/Edit"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<View />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App