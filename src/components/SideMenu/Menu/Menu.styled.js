/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #64ffda;
  height: 100vh;
  width: 100%;
  text-align: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.9;
  
  @media (min-width: 1024px) {
    width: 30%;
  }

  a {
    font-size: 1.3em;
    font-family: "Montserrat";
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #130524;
    text-decoration: none;
    transform: translateX(20%);
    transition: transform 0.2s ease-in-out;
  }
`;
