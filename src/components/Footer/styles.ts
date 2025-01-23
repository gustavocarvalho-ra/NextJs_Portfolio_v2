import styled from "styled-components";

export const Foot = styled.div `
  width: 100%;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-white);
  background: var(--secondary);

  @media (max-width: 440px) {
    padding: .2em;

    h3 {
      font-size: .8em;
    }
  } 
`