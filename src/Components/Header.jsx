import './header.css';
import logo from '../assets/img/logo.png'


export default function Header(){
    return(
        <header>
            <div className="logo-container">
                <div className="img-container">
                    <img src={logo} alt="Kolt logo"/>
                </div>
            </div>

            <nav>
                <a href="#">Home</a>
                <a href="#">Contact</a>
            </nav>

        </header>
    )
}