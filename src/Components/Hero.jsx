import './hero.css';
import hero from '../assets/img/hero.webp';

export default function Hero(){

    return(
        <div className="hero-container">

        <div className="hero-overlay">
            <h1>Hop on. Go Kolt</h1>
        </div>

            <img src={hero} alt="person on the kick scooter" />
        </div>
    )
}