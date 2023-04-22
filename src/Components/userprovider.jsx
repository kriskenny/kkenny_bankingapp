import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const handleUserAdd = (user) => {
    setUsers([...users, user]);
  };

  return (
    <UserContext.Provider value={{ users, handleUserAdd }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
