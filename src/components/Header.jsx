import profilePic from "../images/profile-pic.png"
import Mail from "../images/Mail.png"
import Linkedin from "../images/linkedin.png"

function Header () {
    return(
    <header>
        <div className="content-wrapper">
        <img src= {profilePic} alt="Profile picture"/>
        

        <h1>Tiffany Berger</h1>
        <h3>Frontend Developer</h3>
        <p><a href="https://tiff3b.github.io/Portfolio/"> tiff3b.github.io/Portfolio</a></p>
        <div className="button">
        <a className="email" href="mailto:tiffany3berger@gmail.com"> <img src={Mail} alt="Mail"/> Email</a>
        <a className="linkedIn" href="https://www.linkedin.com/in/tiff-berger/" ><img src={Linkedin} alt="Linkedin"/>Linkedin</a>
        </div>
        </div>
        
    </header> 
    )
}

export default Header
