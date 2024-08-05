import bgRoom from './images/bgroom.webp';
import arrow from './icons/aboutus-arrow.svg';
import { Link } from "react-router-dom";
import room1 from "./images/room1.webp";
import room2 from "./images/room2.webp";
import room3 from "./images/room3.webp";
function Rooms(){
    return(
        <div className="rooms-sectn">
<div className='bg-room'  style={{backgroundImage: `url(${bgRoom})`}}>
<h3> ROOMS</h3>
<div className='home-room'> 
<Link to='/'>
<p className='linkname'> Home <img src={arrow} alt="" className='arrow-style' /> </p></Link>
<p>Rooms</p></div>

</div>
<div className='ourservices-div'>
    <h3 className='ourservices-head'>Our Favorite Rooms</h3>
    <p style={{fontSize:"20px"}} >Luptatem quia voluptas sit aspernatur aut odit aut fugit, <br></br>sed quia, sed quia non numquam eius</p>

    <div className='container'> 
    <div className='row'>
    {/* <div class="image-container">
        <img src={room1} alt="img" width="200" />
        <div class="overlay">
            <div class="overlay-text">This is a overlay text</div>
        </div>
        </div> */}


    
<div className='col-md-6 col-lg-4 roomimage'><Link to='/roomdetails'><img src={room1} className="each-room image" alt="" /><div class="middle">
    <div class="text"><p>Discover one of our favourite Room from our hotel that are destined to be loved immediately</p></div>
  </div></Link></div>
  <div className='col-md-6 col-lg-4 roomimage'><Link to='/roomdetails'><img src={room2} className="each-room image" alt="" /><div class="middle">
    <div class="text"><p>Discover one of our favourite Room from our hotel that are destined to be loved immediately</p></div>
  </div></Link></div>
  <div className='col-md-6 col-lg-4 roomimage'><Link to='/roomdetails'><img src={room3} className="each-room image" alt="" /><div class="middle">
    <div class="text"><p>Discover one of our favourite Room from our hotel that are destined to be loved immediately</p></div>
  </div></Link></div>
  <div className='col-md-6 col-lg-4 roomimage'><Link to='/roomdetails'><img src={room1} className="each-room image" alt="" /><div class="middle">
    <div class="text"><p>Discover one of our favourite Room from our hotel that are destined to be loved immediately</p></div>
  </div></Link></div>
  <div className='col-md-6 col-lg-4 roomimage'><Link to='/roomdetails'><img src={room2} className="each-room image" alt="" /><div class="middle">
    <div class="text"><p>Discover one of our favourite Room from our hotel that are destined to be loved immediately</p></div>
  </div></Link></div>
  <div className='col-md-6 col-lg-4 roomimage'><Link to='/roomdetails'><img src={room3} className="each-room image" alt="" /><div class="middle">
    <div class="text"><p>Discover one of our favourite Room from our hotel that are destined to be loved immediately</p></div>
  </div></Link></div>
      
        </div>
        </div>
        </div>
        </div>
    )}
    export default Rooms;