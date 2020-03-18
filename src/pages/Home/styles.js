import styled from 'styled-components';
import { darken } from 'polished'; /* darken escurece uma cor*/

export const ProductList = styled.ul`
    display: grid;  /*Nossos produtos vão ficar em formato de grid */
    grid-template-columns: repeat(4, 1fr); /* 3 espaçamentos (colunas) de grid com largura igual */
    grid-gap: 20px; /*Distanciar os produtos em 20px */
    list-style: none; /*Tirar as bolinhas */
    margin-top: 120px;


    li {
      display: flex;
      flex-direction: column; /*Ficar uma informação abaixo da outra */
      background: #fff;
      border-radius: 4px;
      padding: 10px;
      /* width: 192px; */

        img{
          align-self: center;
          max-width: 250px;
          object-fit: cover;
          max-width: 178px;
          margin: 2px;
        }

        > strong { /*Coloquei o sinal de maior para que a instrução que eu passar não funcione dentro de qualquer coisa que não seja dentro do li */
          font-size: 16px;
          line-height: 20px;
          color: #333;
          margin-top: 5px;
        }

        > span{ /*Obs.: não vai mexer no span que está dentro do botão, só o do li */
          font-size: 21px;
          font-weight: bold;
          margin:5px 0 20px;
        }

        button{
          background: #7159c1;
          color: #fff;
          border: 0;
          border-radius: 4px;
          overflow: hidden; /* */
          margin-top: auto; /*Para ele sempre ficar alinhado igual do topo em todos os produtos */

          display:flex;
          align-items: center;
          transition: background 0.2s;

          &:hover{
            background: ${darken(0.03, '#7159c1')};
          }

          div{
            display: flex;
            align-items: center;
            padding:12px;
            background: rgba(0, 0,0, 0.1);

            svg{
              margin-right: 5px;
            }
          }

          span { /*Titulo do botão */
            flex: 1; /*Para que ele ocupe todo o tamanho possível */
            text-align: center;
            font-weight: bold;
          }
        }
    }

`;
