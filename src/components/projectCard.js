import React from 'react'
import Button from './button'
import Modal from './modal'
import useModal from '../hooks/useModal';

const Card = ({name, num, stack }) => {
  const {isShowing, toggle} = useModal();

  return(
  <div className="card">

    <div className={"card__picture card__picture--" + num}>
      &nbsp;
    </div>

    <div className="card__details card__details--animated">

      <span className={"details__heading-span details__heading-span--" + num}>
        {name}
      </span>

      <p className="card__details__sub">
        {stack}
      </p>

    </div>

    <div className="card__btn">
    {/* <button className="button-default" onClick={toggle}>Show Modal</button> */}
      <Button projectName={name} clsNum={num} togl={toggle} />
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
    </div>

  </div>
  )

}

export default Card;