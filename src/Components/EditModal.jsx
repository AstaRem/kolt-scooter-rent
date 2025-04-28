import { useState } from "react"
import './EditModal.css'

export default function EditModal({ scooter, onSave, onClose }) {

  const [newDate, setNewDate] = useState('');
  const [rideKm, setRideKm] = useState('');
  const [busy, setBusy] = useState(scooter.isBusy === 1);

  function handleSave() {
    const updated = { ...scooter };
    if (newDate) updated.lastUseTime = new Date(newDate).toISOString();
    const extraKm = parseFloat(rideKm) || 0;
    updated.totalRideKilometers = parseFloat(
      (updated.totalRideKilometers + extraKm).toFixed(2)
    );
    // Correct busy assignment:
    updated.isBusy = busy ? 1 : 0;
    onSave(updated);
    onClose();
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>Edit scooter:</h3>
        <label><strong>Registration Code</strong></label>
        <input value={scooter.registrationCode} readOnly className="not-editable-reg" />
        <label><strong>Recently used: </strong>{new Date(scooter.lastUseTime).toLocaleDateString()}</label>
        <input
          type="date"
          value={newDate}
          onChange={e => setNewDate(e.target.value)}
        />
        <label><strong>Total km:</strong> {scooter.totalRideKilometers.toFixed(2)}</label>
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
        <div className="btn-div">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
