import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
	padding: 30px;
	background: #fff;
	border-radius: 4px;

	footer {
		margin-top: 30px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		button {
			background: #7159c1;
			color: #fff;
			border: 0;
			border-radius: 4px;
			overflow: hidden;
			padding: 12px 40px;
			margin-top: auto;
			transition: background 200ms;

			&:hover {
				background: ${darken(0.03, '#7159c1')};
			}
		}
	}
`

export const ProductTable = styled.table`
	width: 100%; /*Pois a table, por padrão não vem com 100% preenchido */

  thead th {  
    color: #999;
    text-align: left;
    padding: 12px;
  } 

	tbody td {
		color: #999;
		border-bottom: 1px solid #eee;
	}

	img {
		height: 100px;
	}

	strong {
		color: #333;
		display: block; /*Pra ele jogar o preço pra baixo */  
	}

	span { 
		display: block; 
		margin-top: 5px;
		font-size: 18px;
		font-weight: bold;
	}

	div {
		display: flex;
		align-items: center;

		input {
			border: 1px solid #ddd;
			border-radius: 4px;
			color: #666;
			padding: 6px;
			width: 50px; /*P não ficar muitp grande onde mostra a qtd */
		}
	}

	button {
		background: none;
		border: 0;
		padding: 6px;
	}
`

export const Total = styled.div`
	display: flex;
	align-items: baseline; /*Vai alinhar pela linha dos elms. Se fosse center ia centralizar na vertical */

	span {
		color: #999;
		font-weight: bold;
	}

	strong {
		font-size: 28px;
		margin-left: 5px;
	}
`
