import styled from "styled-components";

export const Ski = styled.div `
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;

  .container {
    width: 100%;
    height: 80%;
    font-size: 1.8em;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 1.5em;

    .title {
      color: var(--prymary);
    }

    .skil {
      width: 65vw;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 2em;

      .card {
        width: 200px;
        height: 220px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        border: 1px solid blue;
        border-radius: 8px;
        background: #00002b;
        color: var(--prymary);

        .icon {
          height: 155px;
          font-size: 5em;
        }

        .nameIcon {
          font-size: 1em;
        }
      }
    }
  }
`