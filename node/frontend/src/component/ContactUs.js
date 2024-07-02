import Navbar from "./Navbar";


function ContactUs(){

    return(
        <>
        <Navbar/>
        <div className="col-xs-12 col-lg-12 col-md-12 col-sm-12 bg" style={{marginTop:"-17px"}}>
         <div class="col-lg-8 col-lg-offset-2  text-center main e ">
            
            <h3 className="f"><b>How can we help youu???</b></h3>
        <form>
            <div class="form-group">
                <input type="text" name="" class="form-control" placeholder="enter your name"/>
            </div>
            <div class="form-group">
                <input type="email" name="" class="form-control" placeholder="enter your email"/>
            </div>
            <div>
                <div className="form-group">
                    <input  type="text" class="form-control " placeholder="enter your message"/>
                </div>
            </div>
    
            <div class="form-group">
                <input type="submit" value="Ok" class="form-control" />
            </div>
        
        </form>
    </div>
    
    
</div>
        </>
        
    )
}
export default ContactUs