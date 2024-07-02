function Navbar() {


    return(
    
        <nav className="navbar navbar-inverse navbar-fixed">
        <div className="col-lg-12">
            <div className="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                {/* <div className="navbar-brand">Logo</div> */}
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav ">
        <li><a href="/">Home</a></li>
        <li className="dropdown"><a href="/clothing" data-toggle="dropdown">Clothing<span class="caret"></span></a>
        <ul className="dropdown-menu">
                    <li><a href="/MenSection">Men section</a></li>
                    <li><a href="/WomenSection">women section</a></li>
                 
                </ul>
        </li>
        <li ><a href="/electronics" >Electronics</a></li>
        <li className="dropdown"><a href="/footwear" data-toggle="dropdown">Footwear<span class="caret"></span></a>
        <ul className="dropdown-menu">
                    <li><a href="/MenFootwear">Men Footwear</a></li>
                    <li><a href="/WomenFootwear">Women Footwear</a></li>
                 
                </ul>
        </li>
        <li ><a href="/watches" >Watches</a></li>
        <li ><a href="/AboutUs" >About Us</a></li>
        <li ><a href="/ContactUs" >Contact Us</a></li>
        <li ><a href="/About1" >About1</a></li>
    </ul>
    </div>
    </div>
    </nav>
    )
}
export default Navbar