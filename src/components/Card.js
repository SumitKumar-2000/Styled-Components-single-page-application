import React from 'react'
import { StyledCard } from './styledComponents/Card.styled'

const Card = ({item}) => {
  return (
    <StyledCard id={item.id}>
        <div>
            <h1>{item.title}</h1>
            <div>
                {item.body}
            </div>
        </div>

        <div>
            <img src={item.image} alt={item.image}/>
        </div>

    </StyledCard>
  )
}

export default Card