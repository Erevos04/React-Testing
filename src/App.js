import React, { Component } from 'react';
import axios from 'axios';
import Loading from './Loading';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      users : [],
      gridData: this.users,
      loading: false
    }
  }

getUsers(){
  this.setState({
    loading: true
  })
  axios('https://api.randomuser.me/?nat=US&results=5')
  .then(response => this.setState({
    users: [...this.state.users, ...response.data.results],
    gridData: [...this.state.users, ...response.data.results],
    loading: false,
  }));

}


  componentWillMount(){
      this.getUsers();
  }

handleSubmit = (e) => {
  e.preventDefault();
  this.getUsers();
}

  render() {
    const {loading, users, gridData} = this.state
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="Load More Users"/>
        </form>
        <hr />
        {!loading ? (
          <div>
            <Grid
              style = {{ height: '400px' }}
              data = {gridData}
          >
              <Column field="name.first" title="First Name" width="150px" />
              <Column field="name.last" title="Last Name" width="150px" />
              <Column field="location.city" title="City" width="200px" />
              <Column field="cell" title="Cellphone" width="200px" />
              <Column field="email" title="Email" width="300" />
              <Column field="registered.date" title="Reg Date" width="300px" />
            </Grid>
          </div>
        ) : <Loading message="Loading users!"/> }
      </div>
    );
  }
}

export default App;
