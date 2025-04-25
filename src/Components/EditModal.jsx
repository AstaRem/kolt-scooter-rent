import { useState } from "react"

export default function EditModal({scooter, onSave, onClose}) {

    const [newDate, setNewDate] = useState('');
    const [rideKm, setRideKm] = useState('');
    const [busy, setBusy] = useState(scooter.isBusy === 1);
    
    function handleSave(){
        const updated = {...scooter};
        if(newDate) updated.lastUseTime = new Date(newDate).toISOString();
        const extraKm = parseFloat(rideKm) || 0;
        updated.totalRideKilometres = parseFloat(
            (updated.totalRideKilometres + extraKm).toFixed(2)
        );
        updated.isBusy === busy ? 1 : 0;
        onSave(updated);
        onClose(); 
    }


  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>Edit scooter {scooter.registrationCode}</h3>
        <label>Registration Code not editable</label>
        <input value={scooter.registrationCode} readOnly />
        <label>Recently used: {new Date(scooter.lastUseTime).toLocaleDateString()}</label>
        <input
          type="date"
          value={newDate}
          onChange={e => setNewDate(e.target.value)}
        />
        <label>Total km: {scooter.totalRideKilometers.toFixed(2)}</label>
        <input
          type="number"
          step="0.01"
          placeholder="KM today"
          value={rideKm}
          onChange={e => setRideKm(e.target.value)}
        />
        <label>
          Busy:
          <input
            type="checkbox" 
            checked={busy}
            onChange={e => setBusy(e.target.checked)}
          />
        </label>
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
  
}
