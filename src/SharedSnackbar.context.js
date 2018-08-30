import React, { Component } from 'react';
import SharedSnackbar from './SharedSnackbar.component';

const SharedSnackbarContext = React.createContext();

export class SharedSnackbarProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users : [
        {"first" : "John", "last" : "Polyzos"},
        {"first" : "Vag", "last" : "Nikas"},
        {"first" : "Orest", "last" : "Dimis"}
      ],
      isOpen: false,
      message: '',
      numvalue : 200
    };
  }

componentDidMount(){
    const users=[
      {"first" : "John", "last" : "Polyzos"},
      {"first" : "Vag", "last" : "Nikas"},
      {"first" : "Orest", "last" : "Dimis"}
    ];
    this.setState({
      users : users
    });
}

  openSnackbar = message => {
    this.setState({
      numvalue : 200,
      message,
      isOpen: true,
    });
  }

  closeSnackbar = () => {
    this.setState({
      message: '',
      isOpen: false,
    });
  }

  sum = () => {
    let add = this.state.numvalue*2
    this.setState({
      numvalue : add
    })
  }


  render(){
    const { children } = this.props;
    return(
      <SharedSnackbarContext.Provider
        value={{
          openSnackbar: this.openSnackbar,
          closeSnackbar: this.closeSnackbar,
          snackbarIsOpen: this.state.isOpen,
          message: this.state.message,
          sum : this.sum,
          users : this.state.users,
          numvalue : this.state.numvalue
        }}
      >

        <SharedSnackbar />

        {children}

      </SharedSnackbarContext.Provider>
    );
  }
}

export const SharedSnackbarConsumer = SharedSnackbarContext.Consumer;
