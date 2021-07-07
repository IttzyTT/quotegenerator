import React from 'react';
import { Controls } from './Controls';

export const QuoteCard = ({ favorite }) => {
  return (
    <div className="quoteCard">
      <div className="quoteText">
        <p>{favorite.text}</p>
      </div>
      <div className="quoteAuthor">
        <p>{favorite.author}</p>
      </div>
      <Controls favorite={favorite} />
    </div>
  );
};
