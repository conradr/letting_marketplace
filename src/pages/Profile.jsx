import { useState, useEffect } from 'react'

import { getAuth } from 'firebase/auth'

const Profile = () => {
  const [user, setUser] = useState(null)

  const auth = getAuth()
  useEffect(() => {
    setUser(auth.currentUser)
  }, [])

  return user ? <h1>Hi {user.displayName}</h1> : <h1>You're not logged in</h1>
    
}

export default Profile
