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
    <div className = 'card border-info mb-3" style="max-width: 18rem;'>
        <div className='card-header text-center fw-bold'>Prenda</div>
        <div className='card-body text-primary text-center'>
        <h5 className="card-title">Nombre de la prenda</h5>
        <p className="card-text">Descripción e imagen de la prenda.</p>
        </div>
        <div className='d-flex flex-row justify-content-center'>
            <button onClick={restar} className="class= btn btn-none">-</button>
           
            <span className="fs-6 fw-bold ">{count}</span>
            <button onClick={sumar} className="class= btn btn-none">+</button>
        </div>
        <div className='d-flex flex-row justify-content-center'>
            <button onClick={() => onAdd(count) } class="btn btn-outline-info">Agregar a la cesta</button>
        </div>
    </div>
  )
}

export default ItemCount;
