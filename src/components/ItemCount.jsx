import React, { useState } from 'react'

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial);

    const sumar = () => {
        count < stock ? setCount(count + 1) :  alert('El stock es insuficiente, no puede agregar más prendas.');
    }

    const restar = () => {
        count > initial ? setCount(count - 1) : alert('Este es el mínimo de prendas que se pueden agregar a la cesta.');
    }

  return (
    <div class = 'card border-info mb-3" style="max-width: 18rem;'>
        <div class='card-header text-center fw-bold'>Prenda</div>
        <div class='card-body text-primary text-center'>
        <h5 class="card-title">Nombre de la prenda</h5>
        <p class="card-text">Descripción e imagen de la prenda.</p>
        </div>



        <div class='d-flex flex-row justify-content-center'>
            <button onClick={restar} class="class= btn btn-none">-</button>
           
            <span class="fs-6 fw-bold ">{count}</span>
            <button onClick={sumar} class="class= btn btn-none">+</button>
        </div>
        <div class='d-flex flex-row justify-content-center'>
            <button onClick={() => onAdd(count) } class="btn btn-outline-info">Agregar a la cesta</button>
        </div>
    </div>
  )
}

export default ItemCount;
