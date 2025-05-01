import { useEffect, useState } from 'react';
import './App.css';
import AddScooterForm from './Components/AddScooterForm';
import EditModal from './Components/EditModal';
import ScooterList from './Components/ScooterList';
import { loadAll, saveAll, addScooter, updateScooter, removeScooter} from './storage';
import Hero from './Components/Hero';


function App() {


  const [scooters, setScooters] = useState([]);
  const [editing, setEditing] = useState(null) // scooter id or null

  //load on mount
  useEffect(() => {
    setScooters(loadAll());
  }, []);

  //sync on change
  useEffect(() => {
    saveAll(scooters);
  }, [scooters]);



  return (
    <>
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
      <Hero />
      <AddScooterForm onAdd={newS => setScooters(prev => [...prev, newS])} />
      <ScooterList 
        scooters={scooters} 
        onEdit={id => setEditing(id)} 
        onDelete={id => setScooters(prev => prev.filter(s => s.id !== id))}
      />
    </div>
    </>
  );
}

export default App;
