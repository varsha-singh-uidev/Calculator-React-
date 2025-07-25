import styled from "styled-components";

export const Main = styled.div`
   display: grid;
   width: 350px;
   min-height: 600px;
   grid-template-rows: minmax(150px, auto) 1fr;
   border-radius: 20px;
   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
   background-color: #0e0e10;
   padding: 20px;
`;

export const Screen  = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  text-align: right;
  grid-column: 1/-1;
  word-wrap: break-word;
  word-break: break-all;
`;

export const Previous = styled.div`
  color: white;
  font-size: 25px; 
`;

export const Current = styled.div`
  color: white;
  font-size: 45px;
`;
