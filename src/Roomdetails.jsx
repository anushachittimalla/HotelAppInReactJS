import bgRoom from './images/bgroom.webp';
import arrow from './icons/aboutus-arrow.svg';
import { Link } from "react-router-dom";
import roomdetailsbg from "./images/roomdetailsbg.webp";
function Roomdetails(){
    return(
        <div className="rooms-sectn">
            <div className='bg-room'  style={{backgroundImage: `url(${bgRoom})`}}>
<h3 style={{marginLeft:"75px"}}> ROOM DETAILS</h3>
<div className='home-room'> 
{/* <Link to='/'>
<p className='linkname'> Home <img src={arrow} alt="" className='arrow-style' /> </p></Link> */}
<Link to='/rooms'><p className='linkname'>Rooms  <img src={arrow} alt="" className='arrow-style' /></p></Link>
<p>Room details</p>
</div>
</div>
<img src={roomdetailsbg} alt="" className='roomdetailsbg' />
<div className='room-description'> 
<h4> Description of Room:</h4>
<p>lorem boluptatum deleniti atque corrupti sdolores et quas molestias cepturi sint eca itate non similique sunt in culpa modi tempora incidunt obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure

lorem boluptatum deleniti atque corrupti sdolores et quas molestias cepturi sint eca itate non similique sunt in culpa modi tempora incidunt obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure obtain</p>
</div>
<div className='row list'>
    <div className='col-md-6'>
        <ul>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg> lorem boluptatum deleniti atque corrupti sdolores et quas molestias cepturi sint  eca itate non similique </li>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>lorem boluptatum deleniti atque corrupti sdolores et quas molestias cepturi sint  eca itate non similique </li>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>lorem boluptatum deleniti atque corrupti sdolores et quas molestias cepturi sint  eca itate non similique </li>
        </ul>
    </div>
    <div className='col-md-6'>
        <ul>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg> lorem boluptatum deleniti atque corrupti sdolores et quas molestias cepturi sint  eca itate non similique </li>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>lorem boluptatum deleniti atque corrupti sdolores et quas molestias cepturi sint  eca itate non similique </li>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>lorem boluptatum deleniti atque corrupti sdolores et quas molestias cepturi sint  eca itate non similique </li>
        </ul>
    </div>

</div>
        </div>
    )}
export default Roomdetails;