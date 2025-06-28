import React from 'react';

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: 'John Deo',
        avatar_url:
          'https://th.bing.com/th/id/OIP.PZaM2TzeWG3wTRBI37kmBAHaHr?rs=1&pid=ImgDetMain', // Placeholder avatar URL
      },
    };
  }

  async componentDidMount() {
    // Simulating fetching user data
    const data = await fetch('https://api.github.com/users/nikhiltiwari566');
    const user = await data.json();
    this.setState({
      userInfo: {
        name: user.name,
        avatar_url: user.avatar_url,
      },
    });
  }

  render() {
    const { name, avatar_url } = this.state.userInfo;

    return (
      <div className='user-detail'>
        <h2 className='pb-3 '>User Detail:</h2>
        <img className='user-avatar' src={avatar_url} alt='User Avatar' />
        <p>
          <strong>User Name:</strong> {name}
        </p>
      </div>
    );
  }
}

export default UserDetail;
