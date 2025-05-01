import { useEffect, useState } from 'react';
import './App.css';
import AddScooterForm from './Components/AddScooterForm';
import EditModal from './Components/EditModal';
import ScooterList from './Components/ScooterList';
import { loadAll, saveAll, addScooter, updateScooter, removeScooter} from './storage';
import Hero from './Components/Hero';
import Header from './Components/Header';
import Statistics from './Components/Statistics';


function App() {


  const [scooters, setScooters] = useState([]);
  const [editing, setEditing] = useState(null) // scooter id or null

  const [sortKmAsc, setSortKmAsc] = useState(true);
  const [sortDateAsc, setSortDateAsc] = useState(true);


  //load on mount
  useEffect(() => {
    setScooters(loadAll());
  }, []);

  //sync on change
  useEffect(() => {
    saveAll(scooters);
  }, [scooters]);

  // handles to so rt by km
  const handleSortByKm = () => {
    const sorted = [...scooters].sort((a, b) => sortKmAsc 
    ? a.totalRideKilometers - b.totalRideKilometers
    : b.totalRideKilometers - a.totalRideKilometers
  );
  setScooters(sorted);
  setSortKmAsc(!sortKmAsc);
  }

  const handleSortByDate = () => {
    const sorted = [...scooters].sort((a, b) => sortDateAsc 
    ? new Date(a.lastUseTime) - new Date(b.lastUseTime)
    : new Date(b.lastUseTime) - new Date(a.lastUseTime)
  );
  setScooters(sorted);
  setSortDateAsc(!sortDateAsc);

  }


  return (
    <>
    <div className="app-wrapper">
    <Header />
    <Hero />


      <div className="app-container">
        {
          editing !== null && (
            <EditModal 
              scooter = {scooters.find(s => s.id === editing)}
              onSave={upd => setScooters(prev => prev.map(s => (s.id === upd.id ? upd : s))
              )}
              onClose={() => setEditing(null)}
            />

          )
        }
        <AddScooterForm onAdd={newS => setScooters(prev => [...prev, newS])} />
        <Statistics scooters={scooters}/>

        <div className="sorting-btn-container">
            <button onClick={handleSortByKm}>Sort by Km - {sortKmAsc ? 'ASC' : 'DESC'}</button> 
            <button onClick={handleSortByDate}>Sort by Last Use Date - {sortDateAsc ? 'ASC' : 'DESC' } </button> 
        </div>



        <ScooterList 
          scooters={scooters} 
          onEdit={id => setEditing(id)} 
          onDelete={id => setScooters(prev => prev.filter(s => s.id !== id))}
        />
      </div>
    </div>
    </>
  );
}

export default App;
