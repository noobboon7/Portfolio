import React from 'react';
import  Helmet  from 'react-helmet';

import {useSiteMetadata} from '../hooks/siteMetadata';

const Head = ({pageTitle}) => {

  
  const {title} = useSiteMetadata()
  
// have to figure how to output right info
  return(

    <Helmet title={`${pageTitle} | ${title}`}/>
  )
}

export default Head;
