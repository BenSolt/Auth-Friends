import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

class addFriend extends React.Component {
    state = {
      credentials: {
        name: '',
        age: '',
        email:''
      }
    };
  
    handleChange = e => {
      this.setState({
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value
        }
      });
    };

    add = e => {
      e.preventDefault();
      // axiosWithAuth ==> ?? an axios instance; .post() ==> ?? promise
      axiosWithAuth()
        .post('/api/friends', this.state.credentials)
        .then(res => {
          localStorage.setItem('token', res.data.payload);
          // redirect to the apps main page?
          this.props.history.push('/protected');
        })
        .catch(err => console.log(err));
    };


render() {
    return (
      <div>
        <form onSubmit={this.add}>
          <input
            type="text"
            placeholder="Add friend"
            name="name"
            value={this.state.credentials.name}
            onChange={this.handleChange}
          />

          <input
            type="text"
            placeholder="Add friend's age"
            name="age"
            value={this.state.credentials.age}
            onChange={this.handleChange}
          />  

          <input
            type="text"
            placeholder="Add friend email"
            name="email"
            value={this.state.credentials.email}
            onChange={this.handleChange}
          />
        
          <button>Add a Friend</button>
        </form>
      </div>
    );
  }
}

export default addFriend;
