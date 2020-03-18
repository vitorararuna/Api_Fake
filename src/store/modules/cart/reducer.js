import produce from 'immer';


export default function cart(state = [], action) { //cart aqui é o state que estamos trabalhando

  //Como o dispatch dispara todos os reducers, acrescentei esse Switch Case => Garante que esse reducer de cart só ouça a action 'ADD_TO_CART'  
  switch (action.type) {

    case '@cart/ADD_SUCCESS':                                             /* action = dispatch que se encontra no botão que foi chamado [action.type & action.product] */  /* Retorna todo o state atual que é um vetor e adicionar o action */
      return produce(state, draft => {                             //draft é a cópia do state
        const {product} = action;

        draft.push(product); //OBS.: AUMENTAR/DIMINUIR ESTOQUE AGORA É O SAGA QUE FAZ
        
      });


    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id); //procurando por um produto em que o id seja igual a esse que estamos recebendo de dentro da nossa action e resgatando seu index de dentro do array

        if (productIndex >= 0) {
          draft.splice(productIndex, 1); //passo o index que quero remover e a qtd de itens a ser removido a partir desse index
        }
      });

    case '@cart/UPDATE_AMOUNT_SUCCESS': {

      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }

    default:
      return state;
  }

}

//Quando o usuário clicar no botão "adicionar ao carrinho", ele vai pegar o objeto em que contém as informações
//do produto e passar pra dentro do reducer do cart, que vai ser acessível pelo resto da aplicação


//Todo reducer recebe por padrão, uma variável chamada "state" e outra "action"
//"action" -> exatamente a action que estamos disparando (ADD_TO_CART)
//"state" -> state anterior, antes da nossa alteração

