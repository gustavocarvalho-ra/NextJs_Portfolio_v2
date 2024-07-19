import styled from "styled-components";

export const Proj = styled.div `
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: red;
  font-size: 1.8em;

  .title {
    color: var(--prymary);
  }

  .container {
    width: 100%;
    height: 85vh;
    gap: 1.5em;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .proje {
      width: 90%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 10em;

      .card {
        background-color: rebeccapurple;
        border: 1px solid red;

        width: 20em;
        height: 20em;
        display: flex;
        align-items: center;
        flex-direction: column;

        padding: .6em;
        gap: .5em;

        .img {
          width: 495px;
          height: 250px;
        }

        .descricao {
          height: 40%;
          font-size: .61em;
          font-weight: 400;
          overflow:auto;    
        }
      }
    }
  }
`