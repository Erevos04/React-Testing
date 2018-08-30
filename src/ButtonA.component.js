import { Button } from '@material-ui/core';
import React, {Component} from 'react';
import { SharedSnackbarConsumer } from './SharedSnackbar.context';
import {withContext} from './withContext.js';

class ButtonA extends Component{

  state = {
    localnumb : 10
  }

  componentDidMount(){
    this.setState({
      localnumb : this.props.value.numvalue
    });
  }

  sumlocal = (num) => {
    const lala=num*4
    this.setState({
      localnumb : lala
    });
  }

  render(){
    return(
      <SharedSnackbarConsumer>
        {({ openSnackbar, sum, numvalue }) => (
          <div>
          <Button
            variant="raised"
            color="primary"
            onClick={() => openSnackbar('You clicked Button A!')}
          >
            Button A
          </Button>
          <button onClick={()=> this.sumlocal(this.state.localnumb) }> Local Button </button>
          {this.state.localnumb}<span>___</span>{numvalue}
          </div>
        )}
      </SharedSnackbarConsumer>
    );
  }
}

export default withContext(ButtonA);
