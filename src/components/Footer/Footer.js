import React from "react";
import "./Footer.css";

const Footer = () => (
    <footer className="footer">
        <div className="bottom">
            <ul id='footer-list'>
                <li><span><img className='reactLogo' src="assets/images/react-logo.png"/></span> Clicky Game!</li>
                <li>© 2018 Evan Tucker</li>
                <li><a href="https://github.com/evanejtucker/clicky-game" target="blank"><span><img className='githubLogo' src="assets/images/github.png"/></span> Github</a></li>
            </ul>
        </div>
    </footer>
)

export default Footer;