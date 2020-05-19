import React from 'react'
import Button from './button'
import Modal from './modal'
import useModal from '../hooks/useModal';
import Img from 'gatsby-image'


const Card = ({name, stack, descrp, sub, stat, img }) => {
  const {isShowing, toggle} = useModal();

  return(
  <div className="card">

    <Img className="card__picture" fluid={img}/>

    <div className="card__details card__details--animated">

      <span className="details__heading-span ">
        {name}
      </span>

      <p className="card__details__sub">
        {stack}
      </p>

    </div>

    <div className="card__btn">
      <Button projectName={name} togl={toggle} />
      <Modal
        isShowing={isShowing}
        hide={toggle}
        projectName={name}
        descrp={descrp}
        sub={sub}
        stat={stat}
        img={img}
      />
    </div>

  </div>
  )

}

export default Card;