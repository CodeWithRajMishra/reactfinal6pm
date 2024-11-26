import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import MenCollection from "./pages/MenCollection";
import WomenCollection from "./pages/WomenCollection";
import KidsCollection from "./pages/KidsCollection";
import Shop from "./pages/Shop";
import ContactUs from "./pages/ContactUs";
import ProductDetail from "./pages/ProductDetail";
import CheckOut from "./pages/CheckOut";
import PaymentDone from "./pages/PaymentDone";
import DashBoard from "./admin/DashBoard";
import InsertProduct from "./admin/InsertProduct";
import Search from "./pages/Search";

const App=()=>{
  return(
    <>
         <BrowserRouter>
           <Routes>
             <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="home" element={<Home/>}/>
              <Route path="cart" element={<Cart/>}/> 
              <Route path="menswear" element={<MenCollection/>}/>
              <Route path="womenwear" element={<WomenCollection/>}/>
              <Route path="kidswear" element={<KidsCollection/>} />
              <Route path="shop" element={<Shop/>}/>
              <Route path="search" element={<Search/>}/>
              <Route path="contact" element={<ContactUs/>}/>
              <Route  path="prodetail/:id" element={<ProductDetail/>}/>
              <Route path="checkout/:amt" element={<CheckOut/>}/>
              <Route path="paydone" element={<PaymentDone/>}/>
             </Route>
           </Routes>
           <Routes>
                 <Route path="dashboard" element={<DashBoard/>}>
                   <Route path="insertpro" element={<InsertProduct/>}/>
                 </Route>
           </Routes>
         </BrowserRouter>
        
    </>
  )
}

export default App;