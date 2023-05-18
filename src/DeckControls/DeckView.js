import React, { useEffect, useState } from "react";
import {
  Link,
  useParams,
} from "react-router-dom";
import { readDeck } from "../utils/api/index";
import AlternateDeckTop from "./AlternateDeckTop";
import CardList from "../CardControls/CardList";

function DeckView() {
  const [deck, setDeck] = useState({});
  const deckId = useParams().deckId;
  useEffect(() => {
    async function loadDeck() {
      const response = await readDeck(deckId);
      setDeck(response);
    }
    loadDeck();
  }, [deckId]);

  if (deck.id) {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb d-flex align-items-center">
            <li className="breadcrumb-item">
              <Link to="/" className="btn btn-link">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item active ">{`${deck.name}`}</li>
          </ol>
        </nav>
        <AlternateDeckTop deck={deck} />
        <h2>Cards</h2>
        <CardList deck={deck} />
      </div>
    );
  } else {
    return "Loading";
  }
}

export default DeckView;