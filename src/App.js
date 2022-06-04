import React from "react";
import "./App.css";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {

  const onAdd = (count) => {
    alert('Se han agregado ' + count + ' prendas a la cesta.');
  }
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Darle estilos'}/>
      <ItemCount initial={1} stock={10} onAdd={onAdd}/>
    </>
  );
}

export default App;
