import React from 'react';

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props;
    return (
      <div className='user-detail'>
        <h2>User Detail</h2>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Address:</strong> {user.address}
        </p>
      </div>
    );
  }
}
