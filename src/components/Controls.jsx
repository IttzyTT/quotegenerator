import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/fontawesome-free-solid';
import styled from 'styled-components';

export const Controls = ({ favorite }) => {
  const { removeQuotefromFavorites } = useContext(GlobalContext);
  return (
    <CardControls>
      <button className="ctrl-btn" onClick={() => removeQuotefromFavorites(favorite.id)}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </CardControls>
  );
};

const CardControls = styled.div`
  width: 100%;

  .ctrl-btn {
    margin-left: 90%;
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-size: 1.2rem;
    color: #f5f5f586;
  }
  .ctrl-btn:hover {
    color: #f37c7cc3;
  }
`;
