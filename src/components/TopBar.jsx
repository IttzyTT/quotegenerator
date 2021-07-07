import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

export const TopBar = () => {
  const { pathname } = useLocation();

  return <TopContainer>{pathname === '/' ? <h1>Quote Generator</h1> : <h1>Favorite Quotes</h1>}</TopContainer>;
};

// style
const TopContainer = styled.div`
  background-color: #2e2e2e;
  color: #e7e7e7;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;
