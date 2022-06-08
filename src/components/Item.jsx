import React from 'react'

const Item = (prenda) => {
    const { prenda: { name, image, price, stock } } = prenda;
    return (
        <div class='card border-info mb-3;'>
            <img class="card-img-top" src="..." alt="Card image cap"></img>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{price}</p>
            </div>
        </div>
    )
}

export default Item