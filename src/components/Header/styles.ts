import styled from "styled-components";

export const Head = styled.div `
  width: 100%;
  height: 5.5vh;
  overflow-x: hidden;
  background: #000010;
  display: flex;
  align-items: center;
  justify-content: space-around;

  h1 {
    color: #fff;
    font-size: 2em;

    span {
      color: green;
    }
  }


  .ctt {
    display: flex;
    gap: .8em;

    .btn {
      width: 5.5em;
      height: 1.7em;

      button {
        width: 100%;
        height: 100%;
        font-size: .9em;
        background: transparent;
        color: #fff;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 12px;
        cursor: pointer;
        transition: all .6s;

        &:hover {
          background: rgba(255, 255, 255, 0.2);
          filter: blur(0.1px);
        }
      }
    }


  }

`
export const Hr = styled.hr `
  border: 1.5px solid green;
  width: 100%;
  max-width: 100vw;
`