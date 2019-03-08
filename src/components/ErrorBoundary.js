/* eslint no-undef: 0 */
import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error })
    Sentry.configureScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key])
      })
    })
    Sentry.captureException(error)
  }

  render() {
    if (this.state.error) {
      // render fallback UI
      return <h1>Shit... somethin' fucked up.</h1>
    } else {
      // When there's not an error, render children untouched
      return this.props.children
    }
  }
}

export default ErrorBoundary
