import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
const [mode, setMode] = useState(false)
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = mode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={() => {setMode(!mode)}}>Dark Mode</button>
        {/* { mode ? "dark mode" : "light mode" } This can replave "Dark Mode" for fun*/}
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
