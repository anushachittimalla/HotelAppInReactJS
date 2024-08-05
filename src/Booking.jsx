import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BookingContext } from './App';

function Booking(/*{ alldates, saveDate }*/) {
    const bookingContext = useContext(BookingContext);

    const [selectDate, setSelectedDate] = useState('');

    const changeDate = (e) => {
        setSelectedDate(e.target.value)
    }

    const handleConfirm = (e) => {
        e.preventDefault();
        if (selectDate === "") {
            toast("Select the date");
        }
        else {
            toast("Booking Confirmed!");
        }
        bookingContext?.saveDate(selectDate);
    }

    return (
        <div className="booking-sec mt-5 mb-5">
            {selectDate} {bookingContext?.alldates}
            <form className='booking-form' type="submit">
                <label className='selectdate-text' >Select Date</label> <br />
                <input type="date" name="dateTime" className='date mb-3' onChange={(e) => changeDate(e)} /> <br />
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
</svg> */}

                <button className='mb-3 p-2'> <Link to='/roomavailability'>Booked Dates   </Link> </button><br />


                <button type="submit" className="confirm p-2" onClick={(e) => { handleConfirm(e)}}>Confirm Booking</button>
                <ToastContainer style={{ marginRight: "30%" }} />

            </form>
        </div>
    )
}
export default Booking;