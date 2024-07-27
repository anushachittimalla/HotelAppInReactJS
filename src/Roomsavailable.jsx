function Roomsavailable({ allDates }) {
    console.log(allDates, 'allDates')
    return (
        <div style={{ marginBottom: "150px", marginTop: "100px" }}>
            <h3> These rooms are not available</h3>

            {allDates.map(each => {
                return <div> {each} </div>
            })}
        </div>
    )
}

export default Roomsavailable;
