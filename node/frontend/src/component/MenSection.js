import Navbar from "./Navbar";
import img1 from './image/img1.jpeg';
import img2 from './image/img2proj.jpeg';
import img3 from './image/img3proj.jpeg';
import img4 from './image/img4proj.jpeg';
import img5 from './image/img5proj.jpeg';
import img6 from './image/img6proj.jpeg';
import img7 from './image/img7proj.jpeg';
import img8 from './image/img8proj.jpeg';

function MenSection(){



return(
<>
<Navbar />
<div className="col-xs-12 text-center main">
  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 a ">
{/* <div class="col-xs-3 a"> */}

    <div class="panel-body">
 <img  src ={img1} /> 
  <h4>Men Formal Coat</h4>
  <h4><b>Sizes Available: L, XL</b></h4>
  <h4><b>Price:₹1299.00/-</b></h4>
  </div>
  <div class="panel-footer">
                    <button class="btn btn-success">Add to cart</button>
                </div>
 
</div>
<div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 a ">
<div class="panel-body">
  <img src ={img2} /> 
  <h4>Regular fit hoodiee</h4>
  <h4><b>Sizes Available: M , L , XL , XXL</b></h4>
  <h4><b>Price:₹499.00/-</b></h4>
  </div>
  <div class="panel-footer">
                    <button class="btn btn-success">Add to cart</button>
                </div>
  
</div>
<div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 a ">
<div class="panel-body">
<img src ={img3} /> 
 <h4 className="text-center ">Double shaded cotton Shirt</h4>
  <h4 className="text-center "><b>Sizes Available: M , L , XL , XXL</b></h4>
  <h4 className="text-center "><b>Price:₹595.00/-</b></h4> 
  </div>
  <div class="panel-footer">
                    <button class="btn btn-success">Add to cart</button>
                </div>
</div>
<div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 a ">
<div class="panel-body">
 <img src ={img4} /> 
 <h4 className="text-center ">Fur Denim jacket</h4>
  <h4 className="text-center "><b>Sizes Available:  L , XL , XXL , XXXL</b></h4>
  <h4 className="text-center "><b>Price:₹999.00/-</b></h4>
</div></div>

<div class="panel-footer">
                    <button class="btn btn-success">Add to cart</button>
                </div>
<div className="col-xs-12">
  
<div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 a ">
<div class="panel-body">
 <img src ={img5} /> 
 <h4 className="text-center ">Casual Zip hoodiee</h4>
  <h4 className="text-center "><b>Sizes Available: L , XL </b></h4>
  <h4 className="text-center "><b>Price:₹695.00/-</b></h4>
 </div>
 <div class="panel-footer">
                    <button class="btn btn-success">Add to cart</button>
                </div>
</div>
<div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 a ">
<div class="panel-body">
 <img src ={img6} /> 
 <h4 className="text-center ">Blue denim jeans</h4>
  <h4 className="text-center "><b>Sizes Available: 30 , 32 , 34 ,36 </b></h4>
  <h4 className="text-center "><b>Price:₹950.00/-</b></h4>
 </div>
 <div class="panel-footer">
                    <button class="btn btn-success">Add to cart</button>
                </div>
</div>
<div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 a ">
<div class="panel-body">
  <img src ={img7} /> 
  <h4 className="text-center ">Olive green cargo pants</h4>
  <h4 className="text-center "><b>Sizes Available: 30 , 32 , 34 ,36 </b></h4>
  <h4 className="text-center "><b>Price:₹730.00/-</b></h4>
 </div>
 <div class="panel-footer">
                    <button class="btn btn-success">Add to cart</button>
                </div>
</div>
<div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 a ">
<div class="panel-body">
 <img src ={img8} /> 
 <h4 className="text-center ">Blue Zip hoodie</h4>
  <h4 className="text-center "><b>Sizes Available: L , XL ,XXL </b></h4>
  <h4 className="text-center "><b>Price:₹695.00/-</b></h4>
 </div>
 <div class="panel-footer">
                    <button class="btn btn-success">Add to cart</button>
                </div>
</div>
{/* <img src ={img} />
<img src ={img2} /> */}
</div>
</div>
</>
)
}



export default MenSection