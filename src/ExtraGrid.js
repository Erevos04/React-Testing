import React, {Component} from 'react';
import { SharedSnackbarConsumer } from './SharedSnackbar.context';
import {Grid , GridColumn as Column} from '@progress/kendo-react-grid';
import '@progress/kendo-theme-default/dist/all.css'

class ExtraGrid extends Component {
  render(){
    return(
      <SharedSnackbarConsumer>

        {({numvalue, users, sum}) => (
          <div>
            <h4>{numvalue}</h4>
            <button onClick={ () => sum() }> Context Button </button>
            <br/>
            <br/>
            <Grid
              data={users}
            >
              <Column field='first' title='firstname' />
              <Column field='last' title='lastname' />
            </Grid>
          </div>
        )}

      </SharedSnackbarConsumer>
    );
  }
}

export default ExtraGrid;
