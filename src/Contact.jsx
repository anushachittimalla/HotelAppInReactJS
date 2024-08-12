import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import bgRoom from './images/bgroom.webp';
import arrow from './icons/aboutus-arrow.svg';
import axios from 'axios';

function Contact() {
   const [resState,setResState] =useState([]);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        msg: "",
        subject: ""
    });

    const changeHandler = e => {
        setFormData((prevFormData) => ({ ...prevFormData,[e.target.name]: e.target.value}))
    }
    useEffect(() => {
        axios.get(`https://reqres.in/api/users?page=2`)
            .then(res => {
                setResState(res.data.data)
                console.log(res,"requestedata")
            }).catch((err) => {
                console.log(err, "error")
            });
    }, []);

    const handleSubmit = (event) => {
        // event.preventDefault();
        // debugger
        console.log(formData);
      
      axios.post(`https://reqres.in/api/users`, { ...formData})
      .then(res => {
          console.log(res, 'response')
      }).catch((err) => {
          console.log(err, "error")
      });

    }
     useEffect(()=>{
        axios.put(`https://reqres.in/api/users/2`, {
            "formData.name":"viha",
            "formData.phone":"90008765"
        })
        .then(res => {
            console.log(res, 'update')
        }).catch((err) => {
            console.log(err, "error")
        });
     },[])   

     useEffect(()=>{
        axios.delete(`https://reqres.in/api/users/2`)
        .then(res => {
            console.log(res, 'delt')
        }).catch((err) => {
            console.log(err, "error")
        });
     },[])   
    
    return (
        <div className="rooms-sectn">
            <div className='bg-room' style={{ backgroundImage: `url(${bgRoom})` }}>
                <h3> CONTACT </h3>
                <div className='home-room'>
                    <Link to='/'>
                        <p className='linkname'> Home <img src={arrow} alt="" className='arrow-style' /> </p></Link>
                    <p>Contact</p></div>
            </div>
            <div className='contact-information'>
                <div className='row'>
                    <div className='contact-address col-md-4 mb-5'>
                        <ul>
                            <li>
                                <h5>Address</h5>
                                <p>Goldcrest School Rd, TNGOs Colony, Gachibowli</p>
                            </li>
                            <hr className='contact-hr' />
                            <li>
                                <h5>Phone</h5>
                                <p>+918801265897</p>
                                <p>+918801235598</p>
                            </li>
                            <hr className='contact-hr' />
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
                        <form className='submit' onSubmit={()=>handleSubmit()}>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <input type='text' placeholder='Name' className='input-style' name="name" onChange={(e) => changeHandler(e)} />
                                </div>
                                <div className='col-md-6'>
                                    <input type='text' placeholder='Email' className='input-style' name='email' onChange={(e) => changeHandler(e)} />
                                </div>
                                <div className='col-md-6'>
                                    <input type='text' placeholder='Phone' className='input-style' name='phone' onChange={(e) => changeHandler(e)} />
                                </div>
                                <div className='col-md-6'>
                                    <input type='text' placeholder='Subject' className='input-style' name='subject' onChange={(e) => changeHandler(e)} />
                                </div>
                            </div>
                            <input type='text-area' placeholder='Message' className='input-style input-msgstyle' name='msg' onChange={(e) => changeHandler(e)} /><br/>
                            <button className="subscibe-button" type='submit'> SUBMIT</button>
                        </form>
                        <buton></buton>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;