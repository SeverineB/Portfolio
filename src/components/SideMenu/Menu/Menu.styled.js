/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffaea1;
  height: 100vh;
  width: 100%;
  text-align: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  
  @media (min-width: 1024px) {
    width: 30%;
  }

  a {
    font-size: 2rem;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #130524;
    text-decoration: none;
   /*  transition: color 0.3s linear; */
    
    @media (max-width: ) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #490098;
    /*   transform: translateX(+2%);
      transition: transform 0.2s ease-in-out; */
    }
  }
`;
