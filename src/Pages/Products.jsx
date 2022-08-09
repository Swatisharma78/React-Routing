import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Products = () => {
 const [data,setData]=useState(null)
 useEffect(()=>{
fetchData()
 },[])
 const fetchData=async()=>{
   try {
     const res=await axios.get("http://localhost:2020/data")
     setData(res.data)
   } catch (detail) {
     console.log(detail)
   }
 }
const cardcontainerstyle={
  display:"flex",
  justifyContent:"space-between",
}
const cardstyle={
  display:"flex",
  fontSize:"30px",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
  margin:"10px",
  border:"1px solid gray",
  width:"350px",
  // background:"pink"
}

  return (
    <div style={cardcontainerstyle}>
      {data?.map((singledata)=>
      <Link key={singledata.id} to={`/products/:${singledata.id}`}>
      <div style={cardstyle} >
        <h5>{singledata.id}</h5>
        <p>{singledata.name}</p>
        <h3>{singledata.price}</h3>
      </div>
      </Link>
      )}


    </div>
  )
}

export default Products