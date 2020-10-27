interface ICardsProps {
  textPay: string;
  name: string;
  lib: string;
  id: number;
}

const Cards: ICardsProps[] = [
  {
    id: 1,
    textPay: 'cartões',
    name: 'credit-card-multiple-outline',
    lib: 'material-community',
  },
  {
    id: 2,
    textPay: 'meus comprovantes',
    name: 'dock-window',
    lib: 'material-community',
  },
  {
    id: 3,
    textPay: 'investimentos',
    name: 'chart-line',
    lib: 'material-community',
  },
  {
    id: 4,
    textPay: 'portabilidade de salário',
    name: 'source-fork',
    lib: 'material-community',
  },
  {
    id: 5,
    textPay: 'crédito',
    name: 'credit-card-plus-outline',
    lib: 'material-community',
  },
];

export {Cards};
