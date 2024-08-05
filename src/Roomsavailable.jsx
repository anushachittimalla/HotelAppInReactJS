import { useContext } from "react";
import { BookingContext } from "./App";

function Roomsavailable(/*{ allDates }*/) {
    const bookingContext = useContext(BookingContext);
    console.log(bookingContext?.allDates, 'allDates')
    return (
        <div style={{ marginBottom: "150px", marginTop: "100px" }}>
            <h3> These dates are booked</h3>

            {bookingContext?.allDates.map(each => {
                return <div> {each} </div>
            })}
        </div>
    )
}

export default Roomsavailable;
