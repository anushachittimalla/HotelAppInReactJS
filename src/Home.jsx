import swiper1 from './images/swiperimg1.jpg';
import swiper2 from './images/swiperimg2.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import './App.css';
import welcomeimg1 from './images/welcomeimg-1.webp';
import welcomeimg2 from './images/welcomeimg-2.webp';
import spalogo from './icons/spaicon.webp';
import restaurantlogo from './icons/restauranticon.webp';
import poollogo from './icons/poolicon.webp';
import bg2 from './images/bg2.webp';
import staff1 from './images/staff1.webp';
import staff2 from './images/staff2.webp';

function Home(){
 
    return(
        
        <div className="home-page">
    
<div className="swiper">
    
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={'auto'}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
        <div className='swiper-image' style={{backgroundImage: `url(${swiper1})`}}> 
        <h1 className='welcome'> WELCOME TO HOTEL PICKLU</h1>
        <div className='lorem-div'> 
        <p className='lorem'> Lorem ipsum dolor sit amet, consectetur adipisicin gelit Lorem ipsum dolor sit amet, gelit Lorem ipsum dolor sit amet</p> </div> </div> 
        </SwiperSlide>
        <SwiperSlide>
        <div className='swiper-image' style={{backgroundImage: `url(${swiper2})`}}> 
        <h1 className='welcome'> WELCOME TO HOTEL PICKLU</h1>
        <div className='lorem-div'> 
        <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicin gelit Lorem ipsum dolor sit amet, gelit Lorem ipsum dolor sit amet</p> </div> </div> 
        </SwiperSlide>
      </Swiper>
  

  </div>

  <div className='explore-div'>
    <div className=''>
        <div className='row'>
            <div className='picklu-explorediv col-lg-6 text-left'>
                <h3 className='welcome-head'>Welcome to <span style={{color:"#caa169"}}> Picklu<br/>  the haven </span> of your weekend </h3>
                <p className='picklu-para'>Picklu luptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius</p>
                <p className='picklu-para'>Picklu luptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</p>
                <div className='explore-button'>
                    <p className='explore-text'>EXPLORE</p>
                </div>
            </div>
            <div className='welcome-imagediv col-lg-6 mt-4'>
                    <img src={welcomeimg1} className="welcomeimg-1 img-shadow" alt="" />
                    <img src={welcomeimg2} className="welcomeimg-2 img-shadow" alt="" />
            </div>
        </div>
    </div>
  </div>

  <div className='ourservices-div'>
    <h3 className='ourservices-head'>Our Awesome Services</h3>
    <div className='row'>
        <div className='d-flex mt-4'>
            <img src={spalogo} alt='' className='spa-logo' />
            <div className='spa'>
                <h4 className='spa-head'>Spa, beauty & Health</h4>
                <p className='spa-para'><span style={{color:"#caa169"}}> Spa and beauty </span>luptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia </p>
            </div>
        </div>
        <div className='d-flex mt-2'>
            <img src={restaurantlogo} alt='' className='spa-logo' />
            <div className='spa'>
                <h4 className='spa-head'>Restaurants</h4>
                <p className='spa-para'><span style={{color:"#caa169"}}> Spa and beauty </span>luptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia </p>
            </div>
        </div>
        <div className='d-flex mt-2'>
            <img src={poollogo} alt='' className='spa-logo' />
            <div className='spa'>
                <h4 className='spa-head'>Swimming pool</h4>
                <p className='spa-para'><span style={{color:"#caa169"}}> Spa and beauty </span>luptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia </p>
            </div>
        </div>
    </div>
  </div>
  <div className='bg2-div'>
<div className='bg2'  style={{backgroundImage: `url(${bg2})`}}>
<div className='row'>
<div className='col-md-3 '>
    <div className='eachcount-div'>
        <div className='eachcount'>
            <h2 className='counter'> <span > 0</span>+</h2>
        </div>
        <div className='eachcount-title'>Happy Clients</div>
    </div>
</div>
<div className='col-md-3'>
    <div className='eachcount-div'>
        <div className='eachcount'>
            <h2 className='counter'> <span > 0 </span></h2>
        </div>
        <div className='eachcount-title'>New Friendships</div>
    </div>
</div>
<div className='col-md-3'>
    <div className='eachcount-div'>
        <div className='eachcount'>
            <h2 className='counter'> <span > 0 </span></h2>
        </div>
        <div className='eachcount-title'>Five Star Ratings</div>
    </div>
</div>
<div className='col-md-3'>
    <div className='eachcount-div'>
        <div className='eachcount'>
            <h2 className='counter'> <span > 0 </span></h2>
        </div>
        <div className='eachcount-title'>Served Breakfast</div>
    </div>
</div>
</div>
</div>
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

        <div className='ourservices-div' style={{marginLeft:"20px"}}>
    <h3 className='ourservices-head'>Our Pricing</h3>
    <div className='container'> 
    <div className='row'>
        <div className='col-md-6 col-lg-3 each-pricing'>
<h4 className='price-head'>Economic</h4>
<hr/>
<div className='price-body'>
    <ul>
        <li>Flight Ticket(2)</li>
        <li>Music Concert <br/> (30% Off)</li>
        <li>Restaurant <br/>  (Snacks)</li>
        <li>Face Make(No)</li>
    </ul>
</div>
<hr className='hr2'/>
<h5 className='amount'>$150<span className='amount-span'>/NIGHT</span></h5>
<div className='signup-div'>
<p className='signup-button'> Sign Up</p>
</div>
        </div>
        <div className='col-md-6 col-lg-3 each-pricing'>
<h4 className='price-head'>The Best</h4>
<hr/>
<div className='price-body'>
    <ul>
        <li>Flight Ticket(2)</li>
        <li>Music Concert <br/> (30% Off)</li>
        <li>Restaurant <br/>  (Snacks)</li>
        <li>Face Make(No)</li>
    </ul>
</div>
<hr className='hr2'/>
<h5 className='amount'>$190<span className='amount-span'>/NIGHT</span></h5>
<div className='signup-div'>
<p className='signup-button'> Sign Up</p>
</div>
        </div>
        <div className='col-md-6 col-lg-3 each-pricing'>
<h4 className='price-head'>Pro</h4>
<hr/>
<div className='price-body'>
    <ul>
        <li>Flight Ticket(2)</li>
        <li>Music Concert <br/> (30% Off)</li>
        <li>Restaurant <br/>  (Snacks)</li>
        <li>Face Make(No)</li>
    </ul>
</div>
<hr className='hr2'/>
<h5 className='amount'>$220<span className='amount-span'>/NIGHT</span></h5>
<div className='signup-div'>
<p className='signup-button'> Sign Up</p>
</div>
        </div>
        <div className='col-md-6 col-lg-3 each-pricing'>
<h4 className='price-head'>Ultra</h4>
<hr/>
<div className='price-body'>
    <ul>
        <li>Flight Ticket(2)</li>
        <li>Music Concert <br/> (30% Off)</li>
        <li>Restaurant <br/>  (Snacks)</li>
        <li>Face Make(No)</li>
    </ul>
</div>
<hr className='hr2'/>
<h5 className='amount'>$250<span className='amount-span'>/NIGHT</span></h5>
<div className='signup-div'>
<p className='signup-button'> Sign Up</p>
</div>
        </div>
        </div>
        </div>
    </div>

        </div>
    )
}
export default Home;