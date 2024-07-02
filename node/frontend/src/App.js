import Home from './component/Home';
// import About from './component/About';
import './App.css';
import Clothing from './component/Clothing';
import Electronics from './component/Electronics';
import Footwear from './component/Footwear';
import MenSection from './component/MenSection';
import WomenSection from './component/WomenSection';
import MenFootwear from './component/MenFootwear';
import WomenFootwear from './component/WomenFootwear';
import Footer from './component/Footer';

import {BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery'
import 'bootstrap/dist/js/bootstrap'
import Navbar from './component/Navbar';
import Watches from './component/Watches';
import AboutUs from './component/AboutUs';
import ContactUs from './component/ContactUs';
import About1 from './component/About1';
import React from 'react';
import Form from './component/Form';

// import Contact from './component/Contact';
// import Gallery from './component/Gallery';


function App() {
  //js
  
  return (


    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/clothing' element={<Clothing/>}/>
      <Route path='/MenSection' element={<MenSection/>}/>
      <Route path='/WomenSection' element={<WomenSection/>}/>
      <Route path='/electronics' element={<Electronics/>}/>
      <Route path='/footwear' element={<Footwear/>}/>
      <Route path='/MenFootwear' element={<MenFootwear/>}/>
      <Route path='/WomenFootwear' element={<WomenFootwear/>}/>
      <Route path='/Watches' element={<Watches/>}/>
      <Route path='/AboutUs' element={<AboutUs/>}/>
      <Route path='/ContactUs' element={<ContactUs/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
      <Route path='/About1' element={<About1/>}/>
      <Route path='/form' element={<Form/>}/>
     
      </Routes>
    </Router>






    // <div >
    //   <Home/>
    //   {/* <About/>
    //    */}
    // </div>
  );
}

export default App;
