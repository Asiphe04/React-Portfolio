import "./NavbarStyles.css"

function Navbar() {
    return (
      <>
     <nav>
        <a href="index.html" className="logo-a">
            <img src="https://i.postimg.cc/HsszXLvy/an-logo-letter-monogram-slash-with-modern-logo-designs-template-vector-removebg-preview-1.png" alt="logo" className="logo"/>
        </a>
        <div className="Navlinks">
        <ul id="navbar">
            <li>
                <a href="index.html" className="active">Home</a>
            </li>
            <li>
                <a href="index.html">About</a>
            </li>
            <li>
                <a href="index.html">Resume</a>
            </li>
            <li>
                <a href="index.html">Projects</a>
            </li>
            <li>
                <a href="index.html">Contact</a>
            </li>
        </ul>
            </div>
            <div id="mobile">
                <i id="bar" className={this.state.clicked ? 'fas fa-time' : 'fas fa-bars'}></i>
            {/* <i className="fas fa-bars"></i>
            <i className="fas fa-times"></i> */}
            </div>
      </nav>  
      </>
    );
  }
  
  export default Navbar;
  