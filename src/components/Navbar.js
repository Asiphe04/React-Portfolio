import { Component } from "react";
import "./NavbarStyles.css"
import { render } from "@testing-library/react";

class Navbar extends Component {
    state = {clicked: false};
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render () {
    return (
      <>
     <nav>
        <a href="index.html" className="logo-a">
            <img src="https://i.postimg.cc/HsszXLvy/an-logo-letter-monogram-slash-with-modern-logo-designs-template-vector-removebg-preview-1.png" alt="logo" className="logo"/>
        </a>
        <div className="Navlinks">
        <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
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
            <div id="mobile" onClick={this.handleClick}>
                <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
           
            </div>
      </nav>  
      </>
    );
  }
}
  
  export default Navbar;
  