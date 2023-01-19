import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'

export const AuthProvider = ({ children }) => {

  const [users, setUsers] = useState();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {

    fetch('/Users.json')
      .then(resp => resp.json())
      .then(resp => { setUsers(resp); })

  }, [])

  return (
    <AuthContext.Provider value={{ users, currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  )
}
