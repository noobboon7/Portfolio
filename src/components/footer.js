// import { Link } from "gatsby";
import React from "react";
import Icon from './icon'
import '../sass/main.scss';

const Footer = ({ siteTitle }) => (
    <footer className="footer">
        <div className="footer__copyright"> 
            <span className="footer__copyright-span"> © {new Date().getFullYear()}</span> Jerry Velazquez
        </div>

        <div className="footer__logo">
            {siteTitle} logo
        </div>
        
        <ul className="footer footer__medialinks">
            <li className="footer footer__links">
                <a href="https://medium.com/@jvr572" rel="noopener noreferrer" target="_blank">
                    <Icon viewBox="0 0 1024 1024" fill="rgb(168, 172, 180)" width="100%" height="100%" icon="Medium"/>
                </a>
            </li>

            <li className="footer footer__links">
                <a href="https://github.com/noobboon7" rel="noopener noreferrer" target="_blank">
                    <Icon viewBox="0 0 1024 1024" fill="rgb(168, 172, 180)" width="100%" height="100%" icon="Github"/>
                </a>
            </li>

            <li className="footer footer__links">
                <a href="https://twitter.com/JvScripts_" rel="noopener noreferrer" target="_blank">
                    <Icon viewBox="0 0 1024 1024" fill="rgb(168, 172, 180)" width="100%" height="100%" icon="Twitter"/>
                </a>
            </li>

            <li className="footer footer__links">
                <a href="https://linkedin.com/in/jerry-velazquez-8540b9bb/" rel="noopener noreferrer" target="_blank">
                    <Icon viewBox="0 0 1024 1024" fill="rgb(168, 172, 180)" width="100%" height="100%" icon="Linkedin"/>
                </a>
            </li>
        </ul>
    </footer>
)



export default Footer
