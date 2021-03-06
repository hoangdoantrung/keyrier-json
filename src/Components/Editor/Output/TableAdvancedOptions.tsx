import * as React from 'react'
import './OutputTable.css'
import { connect } from 'react-redux'
import {
  updateTableColumns,
  UpdateTableColumns,
  UpdateTableGroupBy,
  updateTableGroupBy,
} from '../../../Actions/actions'
import { itemType, RootState } from '../../../State/State'
import { ValueType } from 'react-select/lib/types'
import { getdisplayedColumns, getColumns, getGroupBy, getOutputarray } from '../../../Store/selectors'
import { useToggleState } from '../../../Hooks/hooks'
import { Button, Collapse } from 'reactstrap'
import { memo, useCallback, Suspense } from 'react'
import { withErrorBoundary } from '../../Common/ErrorBoundary'
import { lazy } from 'react'
import { Loading } from '../../Deferred/Loading'

export const ReactSelect = lazy(() => import(/* webpackChunkName: "react-select" */ 'react-select'))

interface Props {
  data: itemType[]
  displayedColumns: string[]
  groupBy: string[]
  columns: string[]
  onColumnsChange: (v: string[]) => UpdateTableColumns
  setTableGroupBy: (v: string[]) => UpdateTableGroupBy
}

const TableAdvancedOptions: React.FC<Props> = ({
  onColumnsChange,
  columns,
  setTableGroupBy,
  data,
  displayedColumns,
}) => {
  const [optionsCollapsed, switchOptionsCollapsed] = useToggleState()

  const handleColumnChange = useCallback(
    (cols: ValueType<{}> | undefined | null) => {
      if (cols instanceof Array) {
        const mapped = cols.map((c: { value?: string }) => (c.value ? c.value : ''))
        onColumnsChange(mapped)
      }
    },
    [onColumnsChange]
  )

  const handleExport = useCallback(async () => {
    const xlsx = await import(/* webpackChunkName: "xlsx.js" */ 'xlsx')
    const workBook = xlsx.utils.book_new()
    const workSheet = xlsx.utils.json_to_sheet(data)
    xlsx.utils.book_append_sheet(workBook, workSheet, 'keyrier-json')
    xlsx.writeFile(workBook, 'export.xlsx')
  }, [data])

  const handleGroupChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => setTableGroupBy([e.target.value]),
    [setTableGroupBy]
  )

  if (columns.length <= 0) {
    return <></>
  }

  const columnOptions = columns.map(k => ({ value: k, label: k }))

  return (
    <div className="row">
      <div className="col">
        <Button className={'float-left'} color="primary" block={true} onClick={switchOptionsCollapsed}>
          {optionsCollapsed ? 'Hide advanced options' : 'Advanced options'}
        </Button>
        <Collapse isOpen={optionsCollapsed}>
          <select
            className="form-control-lg form-control"
            name="select"
            id="groupingSelect"
            onChange={handleGroupChange}
          >
            <option key={'Group by...'}>Group by...</option>
            {displayedColumns.map(key => (
              <option key={key}>{key}</option>
            ))}
          </select>
          <Button color={'success'} onClick={handleExport}>
            Export to Excel (.xlsx)
          </Button>
          <Suspense fallback={<Loading componentName="ReactSelect" />}>
            <ReactSelect
              options={columnOptions}
              value={displayedColumns.map(k => ({
                value: k,
                label: k,
              }))}
              isMulti={true}
              onChange={handleColumnChange}
            />
          </Suspense>
        </Collapse>
      </div>
    </div>
  )
}

const mapStateToProps = (state: RootState) => {
  return {
    data: getOutputarray(state),
    displayedColumns: getdisplayedColumns(state),
    columns: getColumns(state),
    groupBy: getGroupBy(state),
  }
}

export default connect(
  mapStateToProps,
  { onColumnsChange: updateTableColumns, setTableGroupBy: updateTableGroupBy }
)(memo(withErrorBoundary(TableAdvancedOptions)))
