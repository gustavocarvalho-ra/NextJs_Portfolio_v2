import styled from "styled-components";

export const Ski = styled.div `
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: red;

  .container {
    width: 100%;
    height: 80%;
    font-size: 1.8em;
    display: flex;
    justify-content: center;
    
    .title {
      color: var(--prymary);
    }
  }
`