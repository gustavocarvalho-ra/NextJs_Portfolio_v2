import styled from "styled-components";

export const Inf = styled.div `
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  cursor: default;
  background: linear-gradient(135deg, rgba(0,0,27,1) 28%, rgba(0,0,125,1) 100%);

  .container {
    width: 100%;
    height: 75vh;
    padding: 2.5em;

    @media (max-width: 440px) {
      height: 90%;
    }

    .about {
      font-size: 1.8em;

      @media (max-width: 440px) {
        font-size: 1.1em;
      }

      .title {
        color: var(--prymary);
        margin-bottom: .7em;

        @media (max-width: 440px) {
          font-size: 1.5em;
        }
      }

      .abo {
        text-indent: 2em;
        line-height: 1.5;
        font-size: 1em;
        padding-left: 2em;
        color: var(--text-white);

        @media (max-width: 440px) {
          padding-left: 1em;
        }

        p {
          margin-top: .8em;
          text-align: justify;
        }
      }
    }
  }
`