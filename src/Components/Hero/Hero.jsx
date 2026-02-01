import "./Hero.css";
import heroImage from "../../assets/hero1.png";

const Hero = () => {
    return (
        <>
        <div className="container">
            <img className="hero" src={heroImage}/>
        </div>
        </>
    )
}
export default Hero;