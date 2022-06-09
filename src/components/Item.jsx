import React from "react";

const Item = (prenda) => {
    const {id, articulo, precio, stock, } = prenda.prenda;
    return (
        <div id="container">
            <div className="cardPrenda">
                <div className="articulo">{articulo}</div>
                <img src="vestido_dibujo.png" alt="Imagen de la prenda" />
                <div className="card__details">
                    <span className="codigo">Código</span>
                    <span className="id">{id}</span>
                    <p className="precio">Precio: {precio}</p>
                    <p className="stock">Stock: {stock}</p>
                    <button className="btnCard">Detalles</button>
                </div>
            </div>
        </div>
    );
};

export default Item;
