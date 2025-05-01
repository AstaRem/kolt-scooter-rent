import './scooterList.css';
import scooterPNG from '../assets/img/scooter.png';


export default function ScooterList({scooters, onEdit, onDelete}) {


  return (
    <div className="list">
        {
            scooters.map(s => (
                <div key={s.id} className="scooter-row">
                  <div className="scooter-img">
                    <img src={scooterPNG} alt="generic scooter illustration"></img>
                  </div>

                  <div className="scooter-details">
                  
                    <div><strong>Code:</strong>&nbsp;&nbsp;{s.registrationCode}</div>
                    <div><strong>Total km:</strong>&nbsp;&nbsp;{s.totalRideKilometers.toFixed(2)}</div>
                    <div><strong>Last used:</strong>&nbsp;&nbsp;{ new Date(s.lastUseTime).toLocaleDateString()}</div>
                  </div>

                  <div className="scooter-availability">
                    <div>Status:</div>
                    <div className={s.isBusy ? "not-available" : "available"}>{s.isBusy ? 'Not available' : 'Available' }</div>
                  </div>

                  <div className="btn-div-list">
                    <button className="green-btn" onClick={() => onEdit(s.id)}>Edit</button>
                    <button className="red-btn" onClick={() => onDelete(s.id)}>Delete</button>
                  </div>
               
                </div>
            ))
        }
        

    </div>
  );
}
