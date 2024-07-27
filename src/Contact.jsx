import { Link } from 'react-router-dom';
import bgRoom from './images/bgroom.webp';
import arrow from './icons/aboutus-arrow.svg';
function Contact(){
    return(
        <div className="rooms-sectn">
            <div className='bg-room'  style={{backgroundImage: `url(${bgRoom})`}}>
<h3> CONTACT </h3>
<div className='home-room'> 
<Link to='/'>
<p className='linkname'> Home <img src={arrow} alt="" className='arrow-style' /> </p></Link>
<p>Contact</p></div>
</div>
<div className='contact-information'>
<div className='row'>
    <div className='contact-address col-md-4'>
        <ul>
            <li>
                <h5>Address</h5>
                <p>Goldcrest School Rd, TNGOs Colony, Gachibowli</p>
            </li>
            <hr className='contact-hr'/>
            <li>
                <h5>Phone</h5>
                <p>+918801265897</p>
                <p>+918801235598</p>
            </li>
            <hr className='contact-hr'/>
            <li>
                <h5>Web</h5>
                <p>info@picklu.com</p>
                <p>www.picklu.com</p>
            </li>
        </ul>

    </div>
    <div className='contact-form col-md-8'>
        <h5> Get In touch</h5>
        <p className='mt-4'>Terms & Conditions deleniti atque corrupti sdolores et quas molestias cepturi sint  eca itate non similique sunt in culpa modi tempora incidunt  obtain pain </p>
    <form>
        <div className='row'>
            <div className='col-md-6'>
                <input type='text' placeholder='Name' className='input-style' />
            </div>
            <div className='col-md-6'>
                <input type='text' placeholder='Email' className='input-style' />
            </div>
            <div className='col-md-6'>
                <input type='text' placeholder='Phone' className='input-style' />
            </div>
            <div className='col-md-6'>
                <input type='text' placeholder='Subject' className='input-style' />
            </div>
        </div>
        <input type='text-area' placeholder='Message' className='input-style input-msgstyle' />
    </form>
    <button className="subscibe-button"> SUBMIT</button>
    </div>
</div>
</div>
</div>
 )}
export default Contact;