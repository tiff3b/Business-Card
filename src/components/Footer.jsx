import Twitter from "../images/Twitter Icon.png"
import Facebook from "../images/Facebook Icon.png"
import Instagram from "../images/Instagram Icon.png"
import GitHub from "../images/GitHub Icon.png"


function Footer (){
    return (
        <div class="content-wrapper">
            <section class ="footer">
                <a href="https://x.com/tiify3b" target="_blank" aria-label="Twitter">
                    <img src={Twitter} alt="Twitter"/>
                </a>
                <a href="https://www.facebook.com/tiffany.berger.14" target="_blank" aria-label="Facebook">
                    <img src={Facebook} alt="Facebook"/>
                </a>
                <a href="https://www.instagram.com/tiffroo30/" target="_blank" aria-label="Instagram">
                    <img src={Instagram} alt="Instagram"/>
                </a>
                <a href="https://github.com/tiff3b" target="_blank" aria-label="GitHub">
                    <img src={GitHub} alt="GitHub"/>
                </a>
            </section>
        </div>
    )
}

export default Footer
