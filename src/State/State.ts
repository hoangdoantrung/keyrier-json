import initialStateJson from './default-state.json'
import { Theme } from '../Themes/themes.js'
import { DeepReadonly } from 'utility-types'

export type QueryState = DeepReadonly<{
  text: string
  mode: QueryMode
}>

export type SourceState = DeepReadonly<{
  text: string
}>

export type tabType = 'RawJson' | 'Table'

export type OupoutState = Readonly<{
  text: string
  searchTerm: string
  match: boolean
  selectedTab: tabType
  obj: object | null
  errorMessage?: string
  table: OupoutTableState
}>

export type itemType = any

export type QueryMode = 'Javascript' | 'SQL'

export type OupoutTableState = Readonly<{
  array: itemType[]
  isArray: boolean
  isModalOpen: boolean
  displayedColumns: string[]
  columns: string[]
  groupBy: string[]
}>

export type UserSettingsState = DeepReadonly<{
  globalTheme: Theme | null
}>

export type AppState = Readonly<{
  source: SourceState
  query: QueryState
  output: OupoutState
  error?: Error
}>

export type RootState = Readonly<{
  app: AppState
  userSettings: UserSettingsState
}>

export const getInitialAppState = () => initialStateJson as AppState
export const getInitialUserSettingsState = () =>
  ({
    globalTheme: 'materia',
  } as UserSettingsState)
