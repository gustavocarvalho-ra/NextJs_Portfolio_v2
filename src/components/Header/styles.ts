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
  background: #020c0f;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: default;

  h1 {
    color: #fff;
    font-size: 2em;

    span {
      color: var(--prymary);
    }
  }


  .ctt {
    display: flex;
    gap: 1.7em;

    .btn {
      color: #fff;
      font-size: 1em;
      text-decoration: none;
      cursor: pointer;
      transition: all .6s;

      &:hover {
        color: var(--prymary);
      }
    }
  }
`
export const Hr = styled.hr `
  border: 1px solid var(--prymary);
  width: 100%;
  max-width: 100vw;
`