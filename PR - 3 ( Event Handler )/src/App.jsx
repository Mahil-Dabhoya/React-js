import Product from "./Product"
import { Item } from "./Data"
import { useEffect, useState } from "react"

function App() {

  const [record, setRecord] = useState([])
  
  const filterProduct = (cat) => {
    if (cat === "all") {
      setRecord(Item)
    }
    else {
      let data = Item.filter((val) => {
        return val.category === cat
      })
      setRecord(data)
    }
  }

  useEffect(() => {
    setRecord(Item)
  }, [])

  return (
    <div align="center">
      <h1 >Filter App</h1>
      <Product
        product={record}
        filterProduct={filterProduct}
      />
    </div>
  )
}

export default App