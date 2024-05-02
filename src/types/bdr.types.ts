import type { IBase } from './root.types'

export interface BdrResponse extends IBase {
	name:string,
  revenue:number,
  productioncosts:number,
  grossprofit:number,
  indirectcosts:number,
  operationalprofit:number,
  ebint:number,
  netprofit:number
  planrevenue:number,
  planproductioncosts:number,
  plangrossprofit:number,
  planindirectcosts:number,
  planoperationalprofit:number,
  planebint:number,
  plannetprofit:number
}

export type TypeBdr = Partial<Omit<BdrResponse, 'createdAt' | 'updatedAt'>>