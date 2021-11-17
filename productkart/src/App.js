import { useState, useEffect ,useCallback} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Product from "./Product";
import Cart from "./Cart";

const App =()=> {

  const [data, setData] = useState([]);
  const [totalength, seTotalleangth] = useState(0);
  const [dataLength, setDataLength] = useState(1);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/${dataLength}`)
      .then((res) => res.json())
      .then((data) => {
        seTotalleangth(data.datalength);
        setData(prev=>([...prev,...data.data]));
      });
    return () => {};
  }, [dataLength]);

  const fetchMoreData = useCallback(() => {
    setDataLength((pre) => pre + 1);
  },[]);
  return (
    <Router>
    <div className="container">  
    <NavBar cart={cart} />
      <Routes> 
        <Route path='/cart' element={<Cart {...{cart,setCart}} />} />
        <Route path='/' exact element={ <Product {...{ data, setCart, fetchMoreData, totalength }} />} />
        <Route path='*' exact element={<h1 className="text-center mt-5">Page not found</h1>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
