import UserDetail from './UserDetail';
import React from 'react';
import userContext from '../utils/UserContext';

class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <h1>Welcome to the About Page</h1>
        <p>This is the about page of our application.</p>
        <userContext.Consumer>
          {({ loggedInUser }) => (
            <div>
              <p>Name: {loggedInUser.name}</p>
            </div>
          )}
        </userContext.Consumer>
        <UserDetail />
      </div>
    );
  }
}

export default Home;
