import React from "react";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Darle estilos'}/>
    </>
  );
}

export default App;
