import React, { useState } from "react";


function CardFlip({ handleNext, deck = { cards: [] }, cardId = 0 }) {
  const { cards } = deck;
  const card = cards[cardId] || {};
  const [side, setSide] = useState(true);
  function flipCard() {
    setSide(!side);
  }

  const nextButton = !side ? (
    <button
      className="btn btn-primary btn-next"
      onClick={() => {
        setSide(true);
        handleNext();
      }}
    >
      Next
    </button>
  ) : (
    ""
  );
  
 if (side)
  {return (
    <div className="card my-1">
      <div      >
        <h4 className="card-title">
          Card {cardId + 1} of {cards.length}
        </h4>
        <p className="card-text">{card.front}</p>
        <button className="btn btn-secondary" onClick={flipCard}>
          Flip
        </button>
        {nextButton}
      </div>
    </div>
  )}
  else
  {return (
    <div className="card my-1">
      <div
      >
        <h4 className="card-title">
          Card {cardId + 1} of {cards.length}
        </h4>
        <p className="card-text">{card.back}</p>
        <button className="btn btn-secondary" onClick={flipCard}>
          Flip
        </button>
        {nextButton}
      </div>
    </div>
  )
  };
}

export default CardFlip;