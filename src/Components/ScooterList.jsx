
export default function ScooterList({scooters, onEdit, onDelete}) {


  return (
    <div className="list">
        {
            scooters.map(s => (
                <div key={s.id} className="scooter-row">
                    <span>ID: {s.id}</span>
                    <span>Code: {s.registrationCode}</span>
                    <span>Status: {s.isBusy ? 'Not available' : 'Available' }</span>
                    <span>Last used: { new Date(s.lastUseTime).toLocaleDateString()}</span>
                    <span>Total km: {s.totalRideKilometers.toFixed(2)}</span>

                    <button onClick={() => onEdit(s.id)}>Edit</button>
                    <button onClick={() => onDelete(s.id)}>Delete</button>

                </div>
            ))
        }
        

    </div>
  );
}
