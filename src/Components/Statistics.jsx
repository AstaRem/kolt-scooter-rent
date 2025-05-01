import './statistics.css';

export default function Statistics({scooters}){

    const totalScooters = scooters.length;
    const totalKilometers = scooters.reduce((acc, curr) => acc + curr.totalRideKilometers, 0);


    return(
        <div className="statistics-wrapper">

            <div className="statistics-container">
                <div className="total-scooters-div">
                    <p>Total scooters:</p>
                    <p>{totalScooters}</p>
                </div>
                <div className="total-km-div">
                    <p>Total km:</p>
                    <p>{totalKilometers}</p>
                </div>
            </div>
        </div>
    )
}