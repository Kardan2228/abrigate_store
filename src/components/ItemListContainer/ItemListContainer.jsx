import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList';
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
  const [prendasMujer, setPrendasMujer] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(data => setPrendasMujer(data.results))
      .catch(err => console.log(err))
  }, [])

  console.log(prendasMujer);

  return (
    <>
      <div class='ItemListContainer'>{greeting}</div>
      <div>
        <ItemList prendasMujer={prendasMujer} />
      </div>
    </>
  )
}

export default ItemListContainer;