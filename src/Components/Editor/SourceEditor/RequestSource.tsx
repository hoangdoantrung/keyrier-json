import * as React from 'react'
import { logError } from '../../../helpers/logger'
import { connect } from 'react-redux'
import { updateSource } from '../../../Actions/actions'
import { customToString } from '../../../helpers/string'
import { RenderHeaderInput } from './RequestHeader'
import { useState, memo, useCallback } from 'react'
import { Alert, FormGroup, Form, Button } from 'reactstrap'
import { useToggleState, useChangeEventState } from '../../../Hooks/hooks'
import { withErrorBoundary } from '../../Common/ErrorBoundary'

interface Props {
  onFinish: () => void
  setSource: (src: string) => void
}

const HttpRequestSource: React.FC<Props> = ({ onFinish, setSource }) => {
  const [method, setMethod] = useChangeEventState('GET')
  const [url, setUrl] = useChangeEventState('https://rickandmortyapi.com/api/character/')
  const [body, setBody] = useChangeEventState('')
  const [headers, setHeaders] = useState([['Accept', 'application/json'] as [string, string]])
  const [error, setError] = useState(null as TypeError | null)
  const [hasBody, setHasBody] = useToggleState()

  const submit = useCallback(async () => {
    const requestInit: RequestInit = {
      method,
      headers,
      body: hasBody ? body : null,
    }
    const request = new Request(url, requestInit)
    setError(null)

    let json: string
    try {
      const result = await fetch(request)
      json = await result.json()
    } catch (e) {
      logError('HttpRequestSource.submit', e)
      setError(e)
      return
    }
    setSource(customToString(json))
    onFinish()
  }, [method, url, body, headers, hasBody, setError, setSource, onFinish])

  return (
    <div id="HttpRequestSource">
      <FormGroup>
        <label htmlFor="requestMethod">Method</label>
        <select
          className="form-control-lg form-control"
          defaultValue={method}
          name="requestMethod"
          id="requestMethod"
          onChange={setMethod}
        >
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>OPTIONS</option>
        </select>
      </FormGroup>
      <FormGroup>
        <label htmlFor="requestUrl">Request URL</label>
        <input
          defaultValue={url}
          className="form-control-lg form-control"
          type="url"
          name="requestUrl"
          id="requestUrl"
          placeholder="enter an URL"
          onChange={setUrl}
        />
      </FormGroup>
      <div className="position-relative form-check">
        <label className="form-check-label">
          <input type="checkbox" className="form-check-input" onChange={setHasBody} /> Add body
        </label>
      </div>
      <Form inline={true} hidden={!hasBody}>
        <FormGroup>
          <label>Body</label>
          <input className="form-control-lg form-control" type="textarea" value={body} onChange={setBody} />{' '}
        </FormGroup>
      </Form>
      <label htmlFor="headers">Request headers</label>{' '}
      <Button
        outline={true}
        color="primary"
        onClick={() => setHeaders([...headers, [`name-${headers.length + 1}`, 'value']])}
      >
        Add header
      </Button>
      <br />
      <br />
      <HeaderList headers={headers} onChange={setHeaders} />
      <br />
      <Button block={true} color="primary" onClick={submit}>
        Submit
      </Button>
      {error && (
        <Alert color="danger">
          Error: {error.message ? error.message : ''}
          {error.stack ? error.stack : ''}
        </Alert>
      )}
    </div>
  )
}

type HeaderListProps = {
  headers: Array<[string, string]>
  onChange: (headers: Array<[string, string]>) => void
}

const HeaderList: React.FC<HeaderListProps> = ({ headers, onChange }) => {
  const onRemove = React.useCallback((header: [string, string]) => onChange(headers.filter(h => h !== header)), [
    headers,
    onChange,
  ])
  const onChangeCallback = React.useCallback(
    (header: [string, string]) => {
      const index = headers.indexOf(header)
      headers[index] = { ...header }
      onChange([...headers])
    },
    [headers, onChange]
  )
  return (
    <>
      {headers.map((header, index) => (
        <RenderHeaderInput header={header} key={index} id={index} onChange={onChangeCallback} onRemove={onRemove} />
      ))}
    </>
  )
}

export default connect(
  null,
  { setSource: updateSource }
)(withErrorBoundary(memo(HttpRequestSource)))
