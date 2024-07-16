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
      align-items: center;
      flex-wrap: wrap;
      gap: 2.5em;

      .card {
        width: 6em;
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