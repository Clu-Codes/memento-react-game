import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import shuffle from "./utilities/shuffle";
import Card from "./components/Card";

function App() {
  const [cards, setCards] = useState(shuffle); // cards array from assets
  return (
    <div className="grid">
      {cards.map((card) => {
        const { image, id, matched } = card;

        return (
          <Card key={id} image={image} selected={false} onClick={() => {}} />
        );
      })}
    </div>
  );
}

export default App;
