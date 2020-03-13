export default function cart(state = [], action) { //cart aqui é o state que estamos trabalhando

  //Como o dispatch dispara todos os reducers, acrescentei esse Switch Case => Garante que esse reducer de cart só ouça a action 'ADD_TO_CART'  
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];  /* action = dispatch que se encontra no botão que foi chamado [action.type & action.product] */  /* Retorna todo o state atual que é um vetor e adicionar o action */
    default:
      return state;
  }

}

//Quando o usuário clicar no botão "adicionar ao carrinho", ele vai pegar o objeto em que contém as informações
//do produto e passar pra dentro do reducer do cart, que vai ser acessível pelo resto da aplicação


//Todo reducer recebe por padrão, uma variável chamada "state" e outra "action"
//"action" -> exatamente a action que estamos disparando (ADD_TO_CART)
//"state" -> state anterior, antes da nossa alteração

