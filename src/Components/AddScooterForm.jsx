
export default function AddScooterForm({onAdd}) {

    function randomNum(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
      }
      

    function handleAdd(){
        onAdd({
            id: Date.now(), // simple id for now, replace later with uuid or smth. else
            registrationCode: randomNum(1000000, 100000000),
            isBusy: 0,
            lastUseTime: new Date().toISOString(),
            totalRideKilometers: 0.0,
        });
    }

  return (
    <div className="add-form">
        <button onClick={handleAdd}>Add New Scooter</button>

    </div>
  )
}
