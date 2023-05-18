import React, { useEffect, useState } from "react";
import Card from "./Card";



function CardList ({deck}) {
  const [cards, setCards] = useState([]);
  useEffect(() => {
  setCards(deck.cards);
  }, [deck]);

  const list = cards.map((card) => <Card card={card} key={card.id} />);

  return (
    <main className="container">
      <section className="row">{list}</section>
    </main>
  );

};

export default CardList;