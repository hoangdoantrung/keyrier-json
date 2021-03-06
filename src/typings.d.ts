declare module 'brace/mode/json'
declare module 'brace/mode/javascript'
declare module 'brace/mode/mysql'
declare module 'brace/theme/github'
declare module 'brace/theme/monokai'

// declare module 'bootswatch/dist/sketchy/bootstrap.min.css';
declare module 'bootswatch/dist/sandstone/bootstrap.min.css'
declare module 'bootswatch/dist/darkly/bootstrap.min.css'
declare module 'bootswatch/dist/materia/bootstrap.min.css'
declare module 'bootswatch/dist/cosmo/bootstrap.min.css'
declare module 'bootswatch/dist/cyborg/bootstrap.min.css'
declare module 'bootswatch/dist/flatly/bootstrap.min.css'
declare module 'bootswatch/dist/journal/bootstrap.min.css'
declare module 'bootswatch/dist/litera/bootstrap.min.css'
declare module 'bootswatch/dist/lumen/bootstrap.min.css'
declare module 'bootswatch/dist/lux/bootstrap.min.css'
declare module 'bootswatch/dist/minty/bootstrap.min.css'
declare module 'bootswatch/dist/pulse/bootstrap.min.css'
declare module 'bootswatch/dist/simplex/bootstrap.min.css'
declare module 'bootswatch/dist/slate/bootstrap.min.css'
declare module 'bootswatch/dist/solar/bootstrap.min.css'
declare module 'bootswatch/dist/spacelab/bootstrap.min.css'
declare module 'bootswatch/dist/superhero/bootstrap.min.css'
declare module 'bootswatch/dist/united/bootstrap.min.css'
declare module 'bootswatch/dist/yeti/bootstrap.min.css'

declare module 'brace/ext/language_tools'
declare module 'brace/ext/searchbox'
declare module 'brace/snippets/javascript'
declare module 'brace/snippets/json'

declare module 'sql-parser' {
  export interface Name {
    values: string[]
  }
  export interface Source {
    name: Name
  }

  export interface Value {
    value: string
    values: string[]
    value2: string
  }

  export interface Field {
    field: Value
    name: Value
  }

  export interface Op {
    value: string | number | null
    values: string[]
    operation: string | null
    left: Op
    right: Op
  }
  export interface Conditions {
    left: Op
    right: Op
    operation: string | null
  }
  export interface Where {
    conditions: Conditions
  }

  export interface SQLTree {
    source: Source
    where: Where
    fields: Field[]
  }

  export class nodes {
    public static readonly Star: Function
  }

  export type ParseFunction = (s: string) => SQLTree
  export const parse: ParseFunction
}
