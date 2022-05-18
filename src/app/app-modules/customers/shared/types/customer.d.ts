export enum IntentionEnum {
  'proposta',
  'consulta',
  'inspiracao'
}

type Customer = {
  _id?: number,
  firstName: string,
  lastName: string,
  email: string,
  message?: string,
  intention?: IntentionEnum
}
