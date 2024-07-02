import Navbar from "./Navbar";
import img1 from "./image/img2phone.jpg";
import img2 from "./image/img3phone.jpeg";
import img3 from "./image/img4phone.webp";

function AboutUs() {

   return (
      <>
         <Navbar />
         {/* <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center main bg2  " style={{ marginTop: "-17px" }}>
            <h1 className="f"><b>About us!</b></h1>
            <div className="col-lg-2 col-xs-4  g" style={{ marginLeft: "340px", marginTop: "18px" }}>
               <img className="h" src={img1} />
               <h3 style={{ textShadow: "2px 2px 3px skyblue " }}><b> Email:</b></h3>
               <h3><b>xyz@gmail.com</b></h3>
            </div>
            <div className="col-lg-2 col-xs-4 g" style={{ marginLeft: "125px", marginTop: "18px" }} >
               <img className="h" src={img2} />
               <h3 style={{ textShadow: "2px 2px 3px skyblue " }}><b>PhoneNumber:</b></h3>
               <h3><b>9876543210</b></h3>
            </div>
            <div className="col-lg-2 col-xs-4 g" style={{ marginLeft: "125px", marginTop: "18px" }}>
               <img className="h" src={img3} />
               <h3 style={{ textShadow: "2px 2px 3px skyblue " }}><b>Address:</b></h3>
               <h3><b>Ludhiana</b></h3>
            </div>


            <div className="col-xs-8 i">
               <h1></h1>
            </div>
         </div> */}


         <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center main bg2  " style={{ marginTop: "-17px" }}>
            <h1 className="f"><b>About us!</b></h1>
            {/* <div className=" pull-right">
               <div className="col-lg-2 col-xs-4  g" >
                  <img className="h" src={img1} />
                  <h3 style={{ textShadow: "2px 2px 3px skyblue " }}><b> Email:</b></h3>
                  <h3><b>xyz@gmail.com</b></h3>
               </div>
               <div className="col-lg-2 col-xs-4 g"  >
                  <img className="h" src={img2} />
                  <h3 style={{ textShadow: "2px 2px 3px skyblue " }}><b>PhoneNumber:</b></h3>
                  <h3><b>9876543210</b></h3>
               </div>
               <div className="col-lg-2 col-xs-4 g">
                  <img className="h" src={img3} />
                  <h3 style={{ textShadow: "2px 2px 3px skyblue " }}><b>Address:</b></h3>
                  <h3><b>Ludhiana</b></h3>
               </div>
            </div> */}

            <div className="col-lg-12 maina">
               <div className="col-lg-3"></div>
               <div className="col-lg-9">
                  <div className="col-lg-3 c ">
                     <div className="col-lg-12 gc">
                     <img className="h" src={img1}/>
                     <h3 style={{ textShadow: "2px 2px 3px skyblue " }}><b> Email:</b></h3>
                  <h3><b>xyz@gmail.com</b></h3>
                     </div>
                  </div>
                  <div className="col-lg-3 c">
                     <div className="col-lg-12 gc"style={{marginLeft:"150px"}} >
                     <img className="h" src={img2}/>
                     <h3 style={{ textShadow: "2px 2px 3px skyblue " }}><b>PhoneNumber:</b></h3>
                  <h3><b>9876543210</b></h3>
                     </div>
                  </div>
                  <div className="col-lg-3 c">
                     <div className="col-lg-12 gc"style={{marginLeft:"300px"}}>
                     <img className="h" src={img3}/>
                     <h3 style={{ textShadow: "2px 2px 3px skyblue " }}><b>Address:</b></h3>
                  <h3><b>Ludhiana</b></h3>
                     </div>
                  </div>
               </div>
            </div>


            <div className="col-xs-8 i">
   <h4 className="j"><b>Amazon is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. Amazon strives to be Earth’s most customer-centric company, Earth’s best employer, and Earth’s safest place to work. Customer reviews, 1-Click shopping, personalized recommendations, Prime, Fulfillment by Amazon, AWS, Kindle Direct Publishing, Kindle, Career Choice, Fire tablets, Fire TV, Amazon Echo, Alexa, Just Walk Out technology, Amazon Studios, and The Climate Pledge are some of the things pioneered by Amazon.</b></h4>
            </div>
         </div>

   


      </>
   )
}
export default AboutUs