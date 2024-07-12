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
    gap: 2em;

    .apre {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      gap: .6em;
      cursor: default;
    }

    h1 {
      font-size: 3.7em;
      color: #b5b5b5;
      font-weight: 800;
    }

    h2 {
      font-size: 1.8em;
      color: #b5b5b5;
      font-weight: 400;
    }

    .icons {
      display: flex;
      gap: 1.7em;
      /* margin-bottom: 20vh; */
    }

    .scroll {
      font-size: 1.5em;
      color: var(--prymary);
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      position: relative;
      top: 190px;

      .itens {
        display: flex;
        gap: 2em;

        .linha {
          width: 1px;
          height: 100%;
          border: 2px solid var(--prymary)
        }
      }
    }
  }
`