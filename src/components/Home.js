import UserDetail from './UserDetail';
import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <h1>Welcome to the About Page</h1>
        <p>This is the about page of our application.</p>
        <UserDetail />
      </div>
    );
  }
}

export default Home;
