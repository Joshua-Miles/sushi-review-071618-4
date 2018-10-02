import React, { Fragment } from 'react'

const Sushi = (props) => {
  let sushiImage =null
  if(!props.eatenSushi.includes(props.sushi)){
    sushiImage = <img src={props.sushi.img_url} width="100%" />
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={() => props.onClick(props.sushi)}>
        {sushiImage}
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi