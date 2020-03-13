export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', { //desestruturei uma função do Intl e já dei um nome pra ela
  style: 'currency',
  currency: 'BRL',
});

