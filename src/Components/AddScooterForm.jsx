import { useState } from 'react';
import './addScooterForm.css'


export default function AddScooterForm({ onAdd }) {
  // generate registration code only once when the component mounts
  const [registrationCode] = useState(() => randomNum(1000000, 100000000));
  // default last used date is today (formatted as YYYY-MM-DD)
  const [lastUseTime, setLastUseTime] = useState(new Date().toISOString().slice(0, 10));
  const [totalRideKilometers, setTotalRideKilometers] = useState(0);

  function randomNum(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(
      Math.random() * (maxFloored - minCeiled + 1) + minCeiled
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAdd({
      id: Date.now(),
      registrationCode,
      isBusy: 0,
      lastUseTime: new Date(lastUseTime).toISOString(),
      totalRideKilometers: parseFloat(totalRideKilometers),
    });
  }

  return (
    <div className="add-form-wrapper">
      <h3>Add New Scooter</h3>

      <form className="add-form" onSubmit={handleSubmit}>
        <div>
          <label >Registration Code:</label>
          <input 
            type="text" 
            value={registrationCode} 
            readOnly 
            className="input-registration add-input"/>
        </div>
        <div>
          <label>Last used time:</label>
          <input 
            type="date" 
            value={lastUseTime} 
            onChange={e => setLastUseTime(e.target.value)} 
            className="add-input"
          />
        </div>
        <div>
          <label>Total ride km:</label>
          <input 
            type="number" 
            step="0.01" 
            value={totalRideKilometers} 
            onChange={e => setTotalRideKilometers(e.target.value)} 
            className="add-input"
          />
        </div>

        <div className="btn-div-list">
          <button type="submit" className="blue-btn">Add</button>
        </div>

      </form>


    </div>


  );
}
