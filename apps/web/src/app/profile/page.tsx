'use client'
import AuthGuard from '../hoc/AuthGuard'

const Profile = () => {
  return (
    <div>Profile</div>
  )
}

export default AuthGuard(Profile);