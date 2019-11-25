import  React from 'react';
import { Link } from "gatsby"
import  Layout from '../components/layout';
import Head from '../components/head';
import '../sass/aboutPage.scss';
import jerry from'../images/jv-headshot.jpg'
import linkedIn from'../images/linkedin.png'
import twitter from'../images/twitter.png'
import github from'../images/github.png'



const aboutPage = () => {
  return(
    <Layout>
      <Head title="About"/>
      <div className="sidenav">
        <img className="picture-icon" src={jerry} alt="Jerry Velazquez" />

        <img className="test" src={linkedIn} alt="test" />

        <h2>Jerry Velazquez</h2>
        <ul className="icon-contanier">

          <li className="twitter-i"><a href="https://twitter.com/JvScripts_" target ='_blank' rel="noopener noreferrer"><img className="" src={twitter} alt="" /></a>
          </li>

          <li className="github-icon"><a href="https://github.com/noobboon7" target ='_blank' rel="noopener noreferrer"><img className="" src={github} alt="github" /></a>
          </li>

          <li className="linkedIn-icon"><a href="https://www.linkedin.com/in/jerry-velazquez-8540b9bb/" target ='_blank' rel="noopener noreferrer" ><img className="" src={linkedIn} alt="" /></a>
          </li>

        </ul>

        <p>resume stuff here </p>
        <Link to = '/contact/'>Contact Jerry</Link>
      </div>
    </Layout>
  )
}

export default aboutPage
