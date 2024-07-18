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
    padding: 2.2em;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .proje {
      width: 90%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;

      .card {
        width: 15em;

        .img {
          width: 90%;
          height: 40%;
          
          Image {
            object-fit: cover;
            position: relative;
          }
        }


        Link {
          width: 100%;
        }
      }
    }
  }
`