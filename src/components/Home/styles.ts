import styled from "styled-components";

export const Hom = styled.div `
  width: 100%;
  height: 100vh;
  position: relative;
  cursor: default;

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
    }

    h1 {
      font-size: 3.7em;
      color: var(--text-white);
      font-weight: 800;
    }

    h2 {
      font-size: 1.8em;
      color: var(--text-white);
      font-weight: 400;
    }

    .icons {
      display: flex;
      gap: 1.7em;
    }

    .scroll {
      width: 5vh;
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