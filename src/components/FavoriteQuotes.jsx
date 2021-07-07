import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { QuoteCard } from './QuoteCard';
import styled from 'styled-components';

function FavoriteQuotes() {
  const { favorites } = useContext(GlobalContext);

  return (
    <Container>
      {favorites.length > 0 ? (
        <div className="quoteGrid">
          {favorites.map((favorite) => (
            <QuoteCard className="quoteCard" favorite={favorite} key={favorite.id} />
          ))}
        </div>
      ) : (
        <h2 className="noQuotes">No quotes in your list, add some!</h2>
      )}
    </Container>
  );
}

export default FavoriteQuotes;

const Container = styled.div`
  padding: 4rem 0rem;

  .quoteCard {
    background-color: #2b323a;
    padding: 0.5rem;
    border-bottom: 1px solid #627286ba;
  }
`;
