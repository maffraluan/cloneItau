interface ICardsProps {
  textPay: string,
  name: string,
  lib: string,
  id: number,
}

const Cards: ICardsProps[] = [
  {
    id: 1,
    textPay: 'pagar conta',
    name: "barcode",
    lib: 'material-community'
  },
  {
    id: 2,
    textPay: 'fazer transferência',
    name: "transfer",
    lib: 'material-community'
  },
  {
    id: 3,
    textPay: 'recarregar celular',
    name: "cellphone",
    lib: 'material-community'
  },
  {
    id: 4,
    textPay: 'DDA - boleto eletrônico',
    name: "dollar",
    lib: 'foundation'
  },
  {
    id: 5,
    textPay: 'detran',
    name: "car-hatchback",
    lib: 'material-community'
  },
  {
    id: 6,
    textPay: 'pagamentos automáticos',
    name: "autorenew",
    lib: 'material-community'
  },
];

export { Cards }