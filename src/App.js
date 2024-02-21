import Homee from "./Components/Homee";
import Loginsignout from "./Components/LoginSignout/Loginsignout";
import Login from "./Components/LoginSignout/Login";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter , Routes,Route } from "react-router-dom";
import ContactUs from "./Components/ContactUs";
import HelpAndSupport from "./Components/HelpAndSupport";
import Legal from "./Components/Legal";
import Partner from "./Components/Partner";
import Faqs from "./Components/Faqs";
import Deliveries from "./Components/Deliveries";
import Cart from "./Components/Cart";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
             <Routes>
               <Route path="/" element={<Loginsignout/>}/>
               <Route path="/login" element={<Login/>}/>
               <Route path="/homee" element={<Homee/>}/>
               <Route path="/contactus" element={<ContactUs/>}/>
               <Route path="/delivery" element={<Deliveries/>}/> 
               <Route path="/cart" element={<Cart/>}/> 
               {/* <Route path="/favoritepage" element={<Deliveries/>}/>  */}

               <Route path="/help" element={<HelpAndSupport/>}>
                  <Route path="faqs" element={<Faqs/>}/> 
                  <Route path="legal" element={<Legal/>}/> 
                  <Route path="partner" element={<Partner/>}/> 
               </Route>

             </Routes>
             
     </BrowserRouter>
    </div>
  );
}


export default App;
