import {useState } from 'react';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import Rooms from './Rooms';
import Roomdetails from './Roomdetails';
import Roomsavailable from './Roomsavailable';
import Teams from './Teams';
import Contact from './Contact';
import ScrollToTop from './ScrollToTop';
import Booking from './Booking';
function App() {
  const [allDates, setAllDates]= useState([]);

  const saveDate =(selectDate)=>{
    if(allDates.includes(selectDate)){
        window.alert("Date already exists!!")
        }
    else {
        setAllDates((prevDates) => [...prevDates, selectDate])
    }
    // console.log(allDates,"all")
  }

  return (
    <div className="App">
      <div  className='header-cls'> <Navbar /> </div>
      <div style={{paddingTop: "100px"}}>
      <ScrollToTop />
       <Routes> 
        <Route path='/' element={<Home allDates={allDates} saveDate={saveDate} />} />
        <Route path='/rooms' element={<Rooms />} />
        <Route path='/roomdetails' element={<Roomdetails />} />
        <Route path='/roomavailability' element={<Roomsavailable allDates={allDates} />} />
        <Route path='/teams' element={<Teams />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/booking' element={<Booking allDates={allDates} saveDate={saveDate} />} />
      </Routes>
       </div>
       <Footer />
    </div>
  );
}

export default App;
