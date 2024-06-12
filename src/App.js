import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/HomePage/HomePage';
import Footer from './Components/Footer/Footer'
import SolutionsPage from './Pages/SolutionsPage/SolutionsPage'
import IntegrationsPage from './Pages/IntegrationsPage/IntegrationsPage';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Getstarted from './Components/GetStartedToday/Getstarted'
import Pricingpage from './Pages/PricingPage/Pricingpage'
import Seamless from './Components/Seamless/Seamless'
function App() {
  return (
   <>
   <Navbar/>
   <BrowserRouter>
      <Routes>
        <Route path="/navbar" element={<Navbar/>}></Route>
        <Route path="/home" element={<HomePage/>}></Route>
        <Route path="/footer" element={<Footer/>}></Route>
        <Route path="/integration" element={<IntegrationsPage/>}></Route>
        <Route path="/pricing" element={<Pricingpage/>}></Route>
      </Routes>
   </BrowserRouter>
   <Footer/>

   </>
  );
}

export default App;
