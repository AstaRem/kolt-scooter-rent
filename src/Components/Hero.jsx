import './hero.css';
import hero from '../assets/img/hero.webp';

export default function Hero(){

    return(
        <div className="hero-container">
            <img src={hero} alt="person on the kick scooter" />
        </div>
    )
}