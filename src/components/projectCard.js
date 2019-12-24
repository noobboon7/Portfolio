import React from 'react'

const Card = ({name, num, stack }) => (
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

  </div>
)

export default Card;