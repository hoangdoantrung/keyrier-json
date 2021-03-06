import { combineReducers, Reducer } from 'redux'
import { Action } from '../Actions/actions'
import { codeEvaluation } from '../helpers/code'
import { jsonParseSafe, jsonBeautify } from '../helpers/json'
import {
  OupoutState,
  QueryState,
  AppState,
  SourceState,
  OupoutTableState,
  getInitialAppState,
  itemType,
  UserSettingsState,
  getInitialUserSettingsState,
  QueryMode,
  tabType,
  emptyState,
} from '../State/State'
import { logError, logWarning } from '../helpers/logger'
import { containsIgnoreCase } from '../helpers/string'
import { arrayElementName } from '../models/array'

export const rootReducer = (rootState: AppState = getInitialAppState(), action: Action): AppState => {
  if (action.type === 'CLEAR_EDITOR') {
    return emptyState
  }

  if (!action.type) {
    return rootState
  }

  const newState = {
    ...rootState,
    query: query(rootState.query, action),
    source: source(rootState.source, action),
  }

  const newOutputState = output(rootState, newState, action)
  return {
    ...newState,
    output: {
      ...newOutputState,
      table: table(newOutputState.table, action),
    },
  }
}

export const crashReporter = (rootReducerFn: Reducer<AppState>, state: AppState, action: Action): AppState => {
  try {
    return rootReducerFn(state, action)
  } catch (error) {
    logError(error, state)
    logWarning('You may need to clear local storage !!!')

    return { ...state, error }
  }
}

export const source = (state: SourceState, action: Action) => {
  switch (action.type) {
    case 'UPDATE_SOURCE_TEXT':
      return {
        ...state,
        text: state.autoFormat ? jsonBeautify(action.source.trim()) : action.source,
      }
    case 'UPDATE_AUTOFORMAT_SOURCE':
      return { ...state, text: action.active ? jsonBeautify(state.text.trim()) : state.text, autoFormat: action.active }
    default:
      return state
  }
}
export const userSettings = (state: UserSettingsState = getInitialUserSettingsState(), action: Action) => {
  switch (action.type) {
    case 'SWITCH_GLOBAL_THEME':
      return { ...state, globalTheme: action.theme }
    default:
      return state
  }
}

export const query = (state: QueryState, action: Action) => {
  switch (action.type) {
    case 'UPDATE_QUERY':
      return {
        ...state,
        text: action.query.trim(),
      }
    case 'UPDATE_QUERY_MODE':
      return {
        ...state,
        mode: action.mode,
        text: action.mode === 'Javascript' ? getInitialAppState().query.text : 'select * from data',
      }
    default:
      return state
  }
}

export const outputTable = (state: OupoutTableState, action: Action) => {
  switch (action.type) {
    case 'UPDATE_TABLE_COLUMNS':
      return { ...state, columns: action.columns }
    default:
      return state
  }
}

interface Map<T> {
  [key: string]: T
}
export const computeOutput = (
  previousState: OupoutState,
  sourceString: string,
  queryString: string,
  action: Action,
  mode: QueryMode
): OupoutState => {
  const text = codeEvaluation(sourceString, queryString, mode)

  if (text === null) {
    return {
      selectedTab: 'RawJson',
      obj: null,
      objSize: 0,
      searchTerm: '',
      match: false,
      table: {
        isArray: false,
        isModalOpen: false,
        displayedColumns: [],
        columns: [],
        groupBy: [],
      },
    }
  }
  if (text instanceof Error) {
    return {
      selectedTab: 'RawJson',
      obj: null,
      objSize: 0,
      searchTerm: '',
      match: false,
      errorMessage: text.message,
      table: {
        isArray: false,
        isModalOpen: false,
        displayedColumns: [],
        columns: [],
        groupBy: [],
      },
    }
  }

  let displayedColumns = new Array<string>()
  const outputObject: itemType[] | object = jsonParseSafe(text)
  if (Array.isArray(outputObject)) {
    const keyMap: Map<string> = {}
    outputObject
      .filter(d => d !== null && d !== undefined)
      .filter(d => !Object.is(d, {}))
      .filter(d => !Array.isArray(d))
      .map(d => (d ? (typeof d === 'object' ? Object.keys(d) : [arrayElementName]) : []))
      .forEach(keysToAdd => {
        keysToAdd.forEach(key => (keyMap[key] = key))
      })
    displayedColumns = Object.keys(keyMap)
      .filter(key => key)
      .filter(key => typeof key === 'string')
      .filter(key => key.trim() !== '')
      .sort((ax, b) => ax.toLowerCase().localeCompare(b.toLowerCase()))
  }
  const isModalOpen =
    action.type === 'TOGGLE_OUTPUT_TABLE_MODAL' ? !previousState.table.isModalOpen : previousState.table.isModalOpen

  let selectedTab: tabType = Array.isArray(outputObject) ? 'Table' : 'RawJson'

  if (action.type === 'UPDATE_OUTPUT_TAB_SELECTION') {
    selectedTab = action.tab
  }
  return {
    selectedTab,
    obj: outputObject,
    objSize: text ? text.length : 0,
    searchTerm: '',
    match: false,
    table: {
      isArray: Array.isArray(outputObject),
      isModalOpen,
      displayedColumns,
      columns: displayedColumns,
      groupBy: [],
    },
  }
}

export const output = (previousState: AppState, newState: AppState, action: Action): OupoutState => {
  switch (action.type) {
    case '@@INIT':
      return computeOutput(newState.output, newState.source.text, newState.query.text, action, newState.query.mode)
    case 'EVALUATE_CODE':
    case 'RESET_EDITOR':
    case 'UPDATE_QUERY':
    case 'UPDATE_SOURCE_TEXT':
      return previousState.source.text === newState.source.text && previousState.query.text === newState.query.text
        ? previousState.output
        : computeOutput(newState.output, newState.source.text, newState.query.text, action, newState.query.mode)
    case 'UPDATE_QUERY_MODE':
      return computeOutput(newState.output, newState.source.text, newState.query.text, action, newState.query.mode)
    case 'TOGGLE_OUTPUT_TABLE_MODAL':
      return {
        ...newState.output,
        table: {
          ...newState.output.table,
          isModalOpen: !newState.output.table.isModalOpen,
        },
      }
    case 'UPDATE_OUTPUT_TAB_SELECTION':
      return {
        ...newState.output,
        selectedTab: action.tab,
      }
    case 'UPDATE_OUTPUT_SEARCH_TERM':
      return {
        ...filter(newState.output, action.searchTerm),
        searchTerm: action.searchTerm,
        selectedTab: 'RawJson',
      }
    default:
      return newState.output
  }
}

export const containsTerm = (src: any | any[] | null, searchTerm: string) => {
  if (typeof src !== 'string' && typeof src !== 'object') {
    return { match: false, filteredObj: src }
  }

  if (typeof src === 'string') {
    if (containsIgnoreCase(src, searchTerm)) {
      return { match: true, filteredObj: src }
    }
    return { match: false, filteredObj: src }
  }
  const obj: { [key: string]: any } = Array.isArray(src) ? [...src] : { ...src }

  const keys = Array.isArray(obj)
    ? Array.from({ length: obj.length }, (_, k) => k)
    : Object.getOwnPropertyNames(obj).filter(propertyName => propertyName)

  let result = false

  for (const propertyName of keys) {
    const propertyNameContains = typeof propertyName === 'string' && containsIgnoreCase(propertyName, searchTerm)
    if (propertyNameContains) {
      result = true
      continue
    }
    const child = obj[propertyName]
    const { match, filteredObj } = containsTerm(child, searchTerm)
    if (propertyNameContains || match) {
      result = true
      obj[propertyName] = filteredObj
    } else {
      if (Array.isArray(obj) && typeof propertyName === 'number') {
        obj.splice(propertyName, 1)
      } else {
        delete obj[propertyName]
      }
    }
  }
  if (!result) {
    if (!Array.isArray(obj)) {
      ;(keys as string[]).forEach((propertyName: string) => delete obj[propertyName])
    } else {
      obj.length = 0
    }
  }
  return { match: result, filteredObj: obj }
}

const filter = (state: OupoutState, searchTerm: string) => {
  if (!searchTerm && searchTerm.trim() === '') {
    return { ...state, match: false }
  }
  const { filteredObj, match } = containsTerm(state.obj, searchTerm)
  if (match) {
    return { ...state, obj: filteredObj, match }
  }

  return state
}

export const table = (state: OupoutTableState, action: Action) => {
  switch (action.type) {
    case 'UPDATE_TABLE_COLUMNS':
      let groupByList = state.groupBy
      groupByList.forEach(groupBy => {
        if (action.columns.indexOf(groupBy) === -1) {
          groupByList = groupByList.filter(gb => action.columns.indexOf(gb) !== -1)
        }
      })
      return {
        ...state,
        displayedColumns: action.columns,
        groupBy: groupByList,
      }
    case 'UPDATE_TABLE_GROUP_BY':
      return {
        ...state,
        groupBy: action.groupBy
          .filter(gb => state.displayedColumns.indexOf(gb) !== -1)
          .filter(gb => gb !== 'Group by...'),
      }
    default:
      return state
  }
}

export const rootReducerReset = (state: AppState | undefined, action: Action) => {
  if (action.type === 'RESET_EDITOR') {
    return rootReducer({ ...getInitialAppState() }, action)
  }
  return rootReducer(state, action)
}
const rootReducers = combineReducers({
  app: rootReducerReset,
  userSettings,
})
export default rootReducers
