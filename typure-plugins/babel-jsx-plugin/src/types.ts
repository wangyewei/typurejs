import { BabelFile, types as t } from '@babel/core'

export type State = {
  get: (name: string) => any
  set: (name: string, value: any) => any
  file: BabelFile,
  createElementIdentifier: string;
}