import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import CardForm from "./CardForm";
import { readDeck, readCard, updateCard } from "../utils/api/index";

function EditCard() {
  const history = useHistory();
  const deckId = useParams().deckId;
  const cardId = useParams().cardId;
  const [deck, setDeck] = useState({});
  const [card, setCard] = useState({});

  useEffect(() => {
    const abortController = new AbortController();

    async function loadDeck() { //do I need to put this in a separate useEffect to pull the deck info?
        try {
          const deckInfo = await readDeck(deckId, abortController.signal);
          setDeck(deckInfo);
        } catch (error) {
          if (error.name === "AbortError") {
            console.info("aborted");
          } else {
            throw error;
          }
        }
      }
      loadDeck();

    async function loadCard() {
      try {
        const cardInfo = await readCard(cardId, abortController.signal);
        setCard(cardInfo);
      } catch (error) {
        if (error.name === "AbortError") {
          console.info("aborted");
        } else {
          throw error;
        }
      }
    }
    loadCard();
    return () => abortController.abort();
  }, [cardId, deckId]);


    async function handleSubmit(card) {
      try {
        await updateCard(card);
        history.push(`/decks/${deck.id}`);
      } catch (err) {
        if (err.name === "AbortError") {
          console.info("aborted");
        } else {
          throw err;
        }
      }
    }

  function handleCancel() {
    history.push(`/decks/${deckId}`);
  }

  return (
    <div>
      <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item'>
            <Link to='/'>
              <i className='bi bi-house-door-fill'></i> Home
            </Link>
          </li>
          <li className='breadcrumb-item'>
            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
          </li>
          <li className='breadcrumb-item active' aria-current='page'>
            Edit Card {`${card.id}`}
          </li>
        </ol>
      </nav>
      <h1>Edit Card</h1>
      <CardForm
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        card={card}
      />
    </div>
  );
}

export default EditCard;