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
        {!loading ? users.map(user =>
          <div >
            <Grid
              style = {{ height: '400px' }}
              data = {gridData}
          >
              <Column field="data.name.first" title="First Name" width="100px" />
              <Column field="data.name.last" title="Last Name" width="100px" />
              <Column field="user.location.city" title="City" width="100px" />
              <Column field="user.cell" title="Cellphone" width="120px" />
              <Column field="user.email" title="Email" width="100px" />
              <Column field="user.registered.date" title="Reg Date" width="100px" />
            </Grid>
          </div>
        ) : <Loading message="Loading users!"/> }
      </div>
    );
  }
}

export default App;
