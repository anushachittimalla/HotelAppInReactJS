import staff1 from './images/staff1.webp';
import staff2 from './images/staff2.webp';
import { Link } from 'react-router-dom';
import bgRoom from './images/bgroom.webp';
import arrow from './icons/aboutus-arrow.svg';
function Teams(){
    return(
        <div className="rooms-sectn">
            <div className='bg-room'  style={{backgroundImage: `url(${bgRoom})`}}>
<h3> TEAM </h3>
<Link to='/'>
<p className='linkname'> Home <img src={arrow} alt="" className='arrow-style' />Team </p></Link>

</div>
<div className='ourservices-div'>
    <h3 className='ourservices-head'>Our Special Staff</h3>
    <div className='container'> 
    <div className='row'>
        <div className='col-md-6 col-lg-3 each-staff'>
            <img src={staff1} className="staff-image" alt="" />
            <div className='staff-info'>
                <h4 className='staff-name'>Shirley Gibson</h4>
                <p className='staff-role'>Manager</p>
            </div>
        </div>
        <div className='col-md-6 col-lg-3 each-staff'  >
        <img src={staff2} className="staff-image"  alt="" />
            <div className='staff-info'>
                <h4 className='staff-name'>Ronald long</h4>
                <p className='staff-role'>Master Chef</p>
            </div>
        </div>
        <div className='col-md-6 col-lg-3 each-staff'  >
        <img src={staff1} className="staff-image"  alt="" />
            <div className='staff-info'>
                <h4 className='staff-name'>Shirley Gibson</h4>
                <p className='staff-role'>Manager</p>
            </div>
            </div>  
        <div className='col-md-6 col-lg-3 each-staff' >
        <img src={staff2} className="staff-image"  alt="" />
            <div className='staff-info'>
                <h4 className='staff-name'>Ronald long</h4>
                <p className='staff-role'>Master Chef</p>
            </div>
            </div>  
            </div> 
            </div> 
        </div>
        </div>
)}
export default Teams;