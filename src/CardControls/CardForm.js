import React, { useEffect, useState, useRef } from "react";

function CardForm({ handleSubmit, handleCancel, card }) {
  const [cardInfo, setCardInfo] = useState();
  
  useEffect(() => {
    setCardInfo(card);
  }, [card]);
  
  const updateForm = (event) => {
    const { name, value } = event.target;
    setCardInfo({ ...cardInfo, [name]: value });
  };
  
  const submit = (event) => {
    handleSubmit(cardInfo);
    setCardInfo({});
  };

  if (!cardInfo) {
    return (
      <form onSubmit={submit}>
        <div className='form-group'>
          <label htmlFor='front'>Front</label>
          <textarea
            className='form-control'
            type='text'
            id='front'
            name='front'
            placeholder='Front of Card'
            value={""}
            onChange={updateForm}
            required
          ></textarea>
        </div>
        <div className='form-group'>
          <label htmlFor='back'>Back</label>
          <textarea
            className='form-control'
            name='back'
            id='back'
            placeholder='Back of Card'
            value={""}
            onChange={updateForm}
            required
          ></textarea>
          <button className='btn btn-secondary my-2' onClick={handleCancel}>
            Done
          </button>
          <button type='submit' className='btn btn-primary my-2'>
            Save
          </button>
        </div>
      </form>
    );
    } else {

  return (
    <form onSubmit={submit}>   
      <div className='form-group'>
        <label htmlFor='front'>Front</label>
        <textarea
          className='form-control'
          type='text'
          id='front'
          name='front'
          placeholder='Front of Card'
          value={cardInfo.front}
          onChange={updateForm} 
          required
        ></textarea>
      </div>
      <div className='form-group'>
        <label htmlFor='back'>Back</label>
        <textarea
          className='form-control'
          name='back'
          id='back'
          placeholder='Back of Card'
          value={cardInfo.back}
          onChange={updateForm}
          required
        ></textarea>
        <button className='btn btn-secondary my-2' onClick={handleCancel}>
          Done
        </button>
        <button type='submit' className='btn btn-primary my-2'>
          Save
        </button>
      </div>
    </form>
  );
  }
}

export default CardForm;