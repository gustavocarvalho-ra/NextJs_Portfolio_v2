import styled from "styled-components";

export const Inf = styled.div `
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  /* background-color: red; */

  .container {
    width: 100%;
    height: 75vh;
    padding: 2.5em;
    /* padding: ; */

    .about {
      font-size: 1.8em;
      
      .title {
        color: var(--prymary);
        margin-bottom: .7em;
      }

      .abo {
        display: flex;
        flex-direction: column;
        gap: .7em;
        text-indent: 2em;
        font-size: 1em;
        padding-left: 2em;
        color: var(--text-white);
      }
    }
  }
`