import { Route, Routes } from "react-router-dom"
import ProductDetail from "./Pages/ProductDetail"
import Products from "./Pages/Products"
import Home from "./Pages/Home"

const AllRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products />}/>
            <Route path="products/:id" element={<ProductDetail />}/>
        </Routes>
    </div>
  )
}

export default AllRoute