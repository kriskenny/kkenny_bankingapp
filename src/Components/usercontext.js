import React from 'react';

const UserContext = React.createContext({
    users: [],
    addUser: () => {},
  });
  

export default UserContext;