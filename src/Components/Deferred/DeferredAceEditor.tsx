import { lazy } from 'react'

export const AceEditor = lazy(async () => {
  const aceEditor = await import(/* webpackChunkName: "react-ace" */ 'react-ace')
  await Promise.all([
    import(/* webpackChunkName: "brace/theme/monokai" */ 'brace/theme/monokai'),
    import(/* webpackChunkName: "brace/theme/github" */ 'brace/theme/github'),
    import(/* webpackChunkName: "brace/mode/json" */ 'brace/mode/json'),
    import(/* webpackChunkName: "brace/mode/javascript" */ 'brace/mode/javascript'),
    import(/* webpackChunkName: "brace/mode/mysql" */ 'brace/mode/mysql'),
    import(/* webpackChunkName: "brace/ext/language_tools" */ 'brace/ext/language_tools'),
    import(/* webpackChunkName: "brace/ext/searchbox" */ 'brace/ext/searchbox'),
    import(/* webpackChunkName: "brace/snippets/javascript" */ 'brace/snippets/javascript'),
    import(/* webpackChunkName: "brace/snippets/json" */ 'brace/snippets/json'),
  ])
  return aceEditor
})
