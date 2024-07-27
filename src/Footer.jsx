import facebook from './icons/facebook.png';
import twitter from './icons/twitter.png';
import instagram from './icons/instagram.png';
import arrow from './icons/aboutus-arrow.svg';

function Footer() {
  return (
    <div className="footer-sectn">
      <div className="footer-topsectn">
        <div className="row">
          <div className="col-md-5">
            <div className="footer-part1">
              <h3 className="hotel-title"> Address </h3>
              <p>Picklu Hotel,<br /> Goldcrest School Rd, TNGOs Colony, Gachibowli</p>
              <div className="homeicon">
                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                </svg><span style={{ marginLeft: "4px" }}>  Hyderabad, Telangana </span></p>
              </div>
              <div className="homeicon">
                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                </svg><span style={{ marginLeft: "4px" }}>+122223334</span></p>
              </div>
              <div className="homeicon">
                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg> <span style={{ marginLeft: "4px" }}> info@picklu.com</span></p>
              </div>
            </div>
          </div>
          <div className="footer-part1 col-md-3 ">
            <h3 className="hotel-title"> Quick Links</h3>

            <p>Home</p>
            <p>Rooms</p>
            <p>Team</p>
            <p>Contact</p>

          </div>

          <div className="footer-part1 col-md-4">
            <h4 className="hotel-title mt-3"> Stay Connected</h4>
            <div className="socialmedia-icons">
              <img src={facebook} className="facebook" alt="" />
              <img src={twitter} className="facebook" alt="" />
              <img src={instagram} className="facebook" alt="" />
              {/* <img src={facebook} className="facebook" alt="" />
<img src={facebook} className="facebook" alt="" /> */}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottomsectn">
        <div className='container'> <div className='row'> <div className='col-md-6'>
          <p> Copy right <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-c-circle copyright" viewBox="0 0 16 16">
            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512" />
          </svg>  <span style={{ color: "#caa169" }}>ImpetusAiSolutions. </span>All rights reserved</p>
        </div>
          <div className='col-md-6'>
            Designed by Anusha
          </div>
        </div></div>
      </div>
    </div>

  )
}
export default Footer;