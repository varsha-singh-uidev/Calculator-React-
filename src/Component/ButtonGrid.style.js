import styled from "styled-components"

export const ButtonGrid1 = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: repeat(5,1fr);
  gap: 10px;
`;

export const Button = styled.button`
  border-radius: 15px;
  font-size: 32px;
  font-weight: 500;
  background-color: #303136;
  color: #d8682b;
  border: none;
  /*  */
  transition: all 0.15s ease-in-out;
  &:hover {
    filter: brightness(1.15);
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.97);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &.button{
    font-size: 20px;
  }

  &.operator{
    font-size: 30px;
    font-weight: 600;
    background-color: #ff7629;
    color: #0a0502;
   /*  */
   &:hover {
      background-color: #fd7d33ff;
    }

  }
  
  &.equal{
    font-size: 30px;
    font-weight: 600;
    grid-row: 4/span 2;
    grid-column: 4;
    background-color: #fff;
    color: #000;
    /*  */
     &:hover {
      background-color: #f1f1f1;
    }
  }

   &.zero{
    grid-column: span 2;
  }
`;
