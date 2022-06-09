import React from 'react'
import Item from './Item'

const ItemList = ({prendasMujer}) => {
  return (
    <div>
        {prendasMujer.map(prenda => <Item key={prenda.id} prenda={prenda} />)}
    </div>
  )
}

export default ItemList