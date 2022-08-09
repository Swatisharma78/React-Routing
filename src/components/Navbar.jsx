import { NavLink } from "react-router-dom"


const Navbar = () => {
    const navstyle={
        display:"flex",
        justifyContent:"space-around",
        background:"lightgrey",
        padding:"2rem"
    }
    const isactive={
        color:"#ef4327",
        textDecoration:"none",
        fontSize:"30px"
    }
    const isnotactive={
        color:"red",
        fontSize:"30px"
    }
  return (
    <nav style={navstyle}>
        <NavLink style={({isActive})=>isActive? isactive:isnotactive} to="/">Home</NavLink>
        <NavLink style={({isActive})=>isActive? isactive:isnotactive} to="/products">Products</NavLink>
    </nav>
  )
}

export default Navbar