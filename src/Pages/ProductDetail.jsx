import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ProductDetail = () => {
  const { id } = useParams();
  const [maindata, setData] = useState(null);
  const [detail,setDetail]=useState(false)
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:2020/data/${id.split(":")[1]}`);
      setData(res.maindata);
      setDetail(false)
    } catch (detail) {
      console.log(detail);
      setDetail(true)
      
    }
  };
 const cardstyle={
    width:"80%",
    marginTop:"50px",
    background:" hsl(218,100%,37%)",
    marginLeft:"120px",
    padding:"15px",
    height:"200px",
    textAlign:"center",
    }

  return(
<>
    {!detail? <div style={cardstyle}>
    <h4>Product {maindata?.name}</h4>
    <h2>Price{maindata?.price}</h2>
    <h3>Id {maindata?.id}</h3>
  </div>:
  <h3>404 Page not found</h3>
  }
</>
    )
};

export default ProductDetail;
