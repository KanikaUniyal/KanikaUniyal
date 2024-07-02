import Navbar from "./Navbar";
import about from './image/About.jpeg'

function About1() {

    return (
        <>
        <Navbar/>
        <div>
            <h3 className="text-center">Welcome to</h3>
            <h1 className="text-center">Store</h1>
            <h3 className="text-center">Get to know about store</h3>
            <div className="col-lg-12">
                <div className="col-lg-6">
                    <img src={about} className="img-responsive"></img>
                </div>
                <div className="col-lg-6">
                    Store is the new online e.commerce store a continously envolving shopping center online. just like in any shopping center, there's always something fresh and exciting. 
                </div>

            </div>
        </div>
        </>
    )
}
export default About1