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
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 2em;
    
    .title {
      color: var(--prymary);
    }

    .skil {
      width: 50vw;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 2em;

      .card {
        width: 195px;
        display: flex;
        align-items: center;
        flex-direction: column;

        .icon {
          font-size: 5em;
        }
      }
    }
  }
`