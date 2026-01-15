import Twitter from "../images/Twitter Icon.png"
import Facebook from "../images/Facebook Icon.png"
import Instagram from "../images/Instagram Icon.png"
import GitHub from "../images/GitHub Icon.png"


function Footer (){
    return (
        
            <footer>
                <div className="content-wrapper">
                    <div className="footer-icons">
                <a className = "social-icon" href="https://x.com/tiify3b" target="_blank" aria-label="Twitter">
                    <img src={Twitter} alt="Twitter"/>
                </a>
                <a className = "social-icon" href="https://www.facebook.com/tiffany.berger.14" target="_blank" aria-label="Facebook">
                    <img src={Facebook} alt="Facebook"/>
                </a>
                <a className = "social-icon" href="https://www.instagram.com/tiffroo30/" target="_blank" aria-label="Instagram">
                    <img src={Instagram} alt="Instagram"/>
                </a>
                <a className = "social-icon" href="https://github.com/tiff3b" target="_blank" aria-label="GitHub">
                    <img src={GitHub} alt="GitHub"/>
                </a>
                </div>
                </div>
            </footer>
        
    )
}

export default Footer
