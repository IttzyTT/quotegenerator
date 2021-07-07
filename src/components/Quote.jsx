import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/fontawesome-free-regular';
import { faStar as fasStar } from '@fortawesome/fontawesome-free-solid';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { GlobalContext } from '../context/GlobalState';

export const Quote = () => {
  const [quotes, setQuotes] = useState('');
  const [likeToggle, setLikeToggle] = useState(false);
  const { addFavorite, favorites } = useContext(GlobalContext);

  // fetch quote from API
  const fetchQuote = async (e) => {
    try {
      const response = await fetch('https://type.fit/api/quotes');
      const data = await response.json();
      data.map((item, id) => Object.assign(item, { id }));

      let randomNum = Math.floor(Math.random() * data.length);
      setQuotes(data[randomNum]);
      setLikeToggle(false);
    } catch (error) {
      console.log(error);
    }
  };

  // fetch a quote at page reload
  useEffect(() => {
    fetchQuote();
  }, []);

  // Liketoggle icon
  const likeHandler = () => {
    if (likeToggle) {
      setLikeToggle(false);
    } else {
      setLikeToggle(true);
    }
  };

  // prevent dubbletes
  let storedQuotes = favorites.find((obj) => obj.id === quotes.id);
  const favoritesDisabled = storedQuotes ? true : false;

  return (
    <Container>
      <div className="favorit">
        <button
          type="button"
          disabled={favoritesDisabled}
          onClick={() => {
            addFavorite(quotes);
            likeHandler();
          }}
        >
          {!likeToggle ? (
            <FontAwesomeIcon icon={farStar} className="star" color="#f8f68d" />
          ) : (
            <FontAwesomeIcon icon={fasStar} className="star" color="#f8f68d" />
          )}
        </button>
      </div>
      <div className="quoteText">
        <h3>{quotes.text}</h3>
        <p>{quotes.author}</p>
      </div>
      <div className="btnContainer">
        <button className="btn" onClick={fetchQuote}>
          Get New Quote
        </button>
        <a href={`https://twitter.com/intent/tweet?text=${quotes.text}`} target="_blank" rel="noopener noreferrer" className="btn twitterbtn">
          Tweet <FontAwesomeIcon icon={fab} className="twitter" />
        </a>
      </div>
    </Container>
  );
};

// Styleing
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 280px;
  min-height: 180px;
  background-color: #161c25;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.5);

  .quoteText {
    margin-bottom: 1rem;
  }

  .btnContainer {
    display: flex;
    justify-content: space-around;
  }
  .btn {
    border: none;
    padding: 0.3rem 1rem;
    background-color: #5f6c91;
    color: whitesmoke;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
  }
  .twitterbtn {
    text-decoration: none;
  }
  .favorit {
    margin-left: 90%;
  }

  .favorit button {
    border: none;
    background: transparent;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;
