import Navbar from "./Navbar"
import imgHome1 from './image/homeimg1.png';
import imgHome2 from './image/menclothing3.jpeg'
import imgHome3 from './image/womenclothing2.jpg'
import imgHome4 from './image/imgHome4.webp'
import imgHome5 from './image/electronics.webp'
import imgHome6 from './image/menfootwear.webp'
import imgHome7 from './image/womenfootwear2.jpeg'
import { Link } from "react-router-dom";
function Home(){
    return(
        <>
        <Navbar/>
        <div className="col-lg-12 col-xs-12 col-md-12 col-sm-12 ">
        <img className="b" src ={imgHome1} />
      
        </div>
        <div className="col-xs-12 text-center main">
        <div className="col-xs-12 col-lg-2 col-md-6 col-sm-6">
        <Link to={'/Mensection'}><img className="c" src ={imgHome2} /></Link>
        <Link to={'/Mensection'}><h4 className="d" >Men Section</h4></Link>
      
       
         </div>
         <div className="col-xs-12 col-lg-2 col-md-6 col-sm-6">
         <Link to={'/Womensection'}><img className="c" src ={imgHome3} /></Link>
         <Link to={'/Womensection'}><h4 className="d">Women Section</h4></Link>
      
         </div>
         <div className="col-xs-12 col-lg-2 col-md-6 col-sm-6">
         <Link to={'/Electronics'}><img className="c" src ={imgHome5} /></Link>
         <Link to={'/Electronics'}><h4 className="d">Electronics</h4></Link>
      
         </div>
         <div className="col-xs-12 col-lg-2 col-md-6 col-sm-6">
         <Link to={'/Menfootwear'}><img className="c" src ={imgHome6} /></Link>
         <Link to={'/Menfootwear'}><h4 className="d">Men Footwear</h4></Link>
      
         </div>
         <div className="col-xs-12 col-lg-2 col-md-6 col-sm-6">
         <Link to={'/Womenfootwear'}><img className="c" src ={imgHome7} /></Link>
         <Link to={'/Womenfootwear'}><h4 className="d">Women footwear</h4></Link>
      
         </div>
         <div className="col-xs-12 col-lg-2 col-md-6 col-sm-6">
         <Link to={'/Watches'}><img className="c" src ={imgHome4} /></Link>
         <Link to={'/Watches'}><h4 className="d">Watches</h4></Link>
      
         </div>
        </div>
        </>
    )
}
export default Home