import styled from "styled-components";

export const Hom = styled.div `
  width: 100%;
  height: 100vh;
  position: relative;

  .apresentacao {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    z-index: 1;

    h1 {
      font-size: 3.7em;
      color: #d3d3d3;
      font-weight: 600;
    }

    h2 {
      font-size: 1.8em;
      color: #d3d3d3;
      font-weight: 200;
    }
  }
`