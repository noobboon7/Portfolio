import React from 'react';
import PropTypes from "prop-types"
// import { Link } from "gatsby"

import footerStyles from './footer.module.scss';

const Footer = ({author}) => {
  // console.log(PropTypes.node.isRequired);
  return(
    <footer className={footerStyles.footer}>
      <p>
        Created By {author} © {new Date().getFullYear()}
      </p>
    </footer>
  )
}

Footer.propTypes = {
  author: PropTypes.string,
}

Footer.defaultProps = {
  author: ``,
}

export default Footer;
