import React from 'react';
import { SharedSnackbarConsumer } from './SharedSnackbar.context';

export function withContext(Component) {
  return function ContextComponent(props) {
    return(
    <SharedSnackbarConsumer>
      {value => <Component {...props} value={value} />}
    </SharedSnackbarConsumer>
  )
  }
}
