import styled from "styled-components";

export const Proj = styled.div `
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  font-size: 1.8em;
  cursor: default;
  background: linear-gradient(135deg, rgba(0,0,27,1) 40%, rgba(1,84,99,1) 100%);

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
      width: 95%;
      height: 80%;
      display: flex;
      align-items: center;
      overflow: hidden;
      transition: all .6s;
      padding: 0 1em 0 1em;
      border-radius: 12px;
      cursor: grab;
      border: 1px solid transparent;

      ::-webkit-scrollbar {
        width: 4px;
      }

      &:hover {
        background: var(--secondary);
        border: 1px solid var(--prymary);
      }

      .inner {
        width: 3500px;
        height: 100%;
        display: flex;
        align-items: center;
        gap: 1em;

        .card {
          width: 20em;
          height: 20em;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          padding: .6em;
          gap: .6em;
          background-color: #00002b;
          border: 1px solid blue;
          border-radius: 8px;
          color: var(--text-white);

          .titleProj {
            font-size: 1em;
          }
  
          .img {
            width: 495px;
            height: 250px;
            border-radius: 8px;
            pointer-events: none;
          }
  
          .descricao {
            height: 40%;
            font-size: .55em;
            font-weight: 300;
            overflow: auto;
            background: #00003f;
            padding: 0 .5em;
            text-align: justify;
  
            P {
              text-indent: 1em;
            }
          }
  
          .link {
            width: 50%;
            height: 6%;
          }
  
          .li {
            width: 100%;
            height: 100%;
            color: var(--text-white);
            font-weight: 900;
            text-transform: uppercase;
            background: rgba(255, 255, 255, 0.05);
            filter: blur(0.1px);
            border: 1px solid blue;
            border-radius: 8px;
            cursor: pointer;
            transition: all .6s;
  
            &:hover {
              background: var(--secondary);
            }
          }
        }
      }
    }
  }
`