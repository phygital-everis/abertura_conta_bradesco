export interface IContratoEletronico {
  id: number,
  nome: string,
  cpf: string,
  rg: string,
  cartoes: ICartaoContrato[],
  cestas: ICestas[]
};

export interface ICartaoContrato {
  id: number,
  nomeCartao: string,
  limite: number,
  nomePessoasCartaoAdicional: string[]
}

export interface ICestas {
  id: number,
  nomeServico: string,
  valor: number
}
