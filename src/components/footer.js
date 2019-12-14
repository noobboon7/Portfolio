// import { Link } from "gatsby";
import React from "react";
import '../sass/layouts/_footer.scss';

const Footer = ({ siteTitle }) => (
    <footer className="footer">
        <ul className="footer footer__medialinks">
            <li className="footer footer__links"><a href="http://localhost:8000/" alt="social" target="_blank" rel="noopener noreferrer" >media link</a></li>
        </ul>
        © {new Date().getFullYear()}, Built with {``} <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
)



export default Footer
