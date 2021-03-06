import * as React from 'react'
import { logError } from '../../helpers/logger'
import { toast } from 'react-toastify'

const MISSING_ERROR = 'Error was swallowed during propagation.'

type Props = {}
type State = {
  error?: Error
}

class ErrorBoundary extends React.Component<Props, State> {
  public readonly state: State = {
    error: undefined,
  }

  public componentDidCatch(error: Error | null, info: object) {
    this.setState({ error: error || new Error(MISSING_ERROR) }, () => this.notify(info))
  }

  public render() {
    const { children } = this.props
    const { error } = this.state

    if (error) {
      return <>An error occured</>
    }

    return children
  }

  private notify(info: object) {
    logError('An error occured', this.state.error)
    logError('error info:', info)
    toast.error(JSON.stringify(info), { position: 'bottom-right', hideProgressBar: true, autoClose: false })
  }
}

export const withErrorBoundary = <T extends {}>(Wrapped: React.ComponentType<T>) => (props: T) => (
  <ErrorBoundary>
    <Wrapped {...props} />
  </ErrorBoundary>
)
