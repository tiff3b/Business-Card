import profilePic from "../images/profile-pic.png"

function Header () {
    return(
    <div class ="content-wrapper">
    <header>   
        <img src= {profilePic} alt="Profile picture"/>
        <h1>Tiffany Berger</h1>
        <h3>Frontend Developer</h3>
        <a href="https://tiff3b.github.io/Portfolio/">Portfolio</a>
        <button class="email"> <a href="mailto:tiffany3berger@gmail.com">Email</a></button>
        <button class="linkedIn"><a href="https://www.linkedin.com/in/tiff-berger/" >LinkedIn</a></button>
    </header> 
    </div>
    )
}

export default Header
