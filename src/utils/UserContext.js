import { createContext } from 'react';

const userContext = createContext({
  loggedInUser: {
    name: 'Nikhil',
  },
});

export default userContext;
