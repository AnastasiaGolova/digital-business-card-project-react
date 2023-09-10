import tweeter from "./assets/Twitter Icon.png";
import facebook from "./assets/Facebook Icon.png";
import insta from "./assets/Instagram Icon.png"
import github from "./assets/GitHub Icon.png"

function Footer(){
    return (
        <div className="footer">
            <a href="https://github.com/AnastasiaGolova" target="_blank"><img src={github} alt="github icon" /></a>
            <a href="https://www.instagram.com/nastasia.golova/" target="_blank"><img src={insta} alt="instagram icon" /></a>
            <img src={tweeter} alt="tweeter icon" />
            <img src={facebook} alt="facebook icon" />
        </div>
    )
}

export default Footer;