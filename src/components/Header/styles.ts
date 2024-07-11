import styled from "styled-components";

export const Fix = styled.div `
  width: 100%;
  height: 6vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  justify-content: flex-end;
  z-index: 2;
`

export const Head = styled.div `
  width: 100%;
  height: 6vh;
  overflow-x: hidden;
  /* background: #000010; */
  background: #020c0f;
  display: flex;
  align-items: center;
  justify-content: space-around;

  h1 {
    color: #fff;
    font-size: 2em;

    span {
      color: var(--prymary);
    }
  }


  .ctt {
    display: flex;
    gap: .8em;

    Link {
      transition: all 5s;

      &:target {
        scroll-behavior: smooth;
        transition: all 5s;
      }
    }

    .btn {
      width: 5.5em;
      height: 1.7em;
      

      button {
        width: 100%;
        height: 100%;
        font-size: 1em;
        font-family: Poppins;
        color: #fff;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 12px;
        cursor: pointer;
        transition: all .6s;

        &:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      }
    }
  }

`
export const Hr = styled.hr `
  border: 1px solid var(--prymary);
  width: 100%;
  max-width: 100vw;
`