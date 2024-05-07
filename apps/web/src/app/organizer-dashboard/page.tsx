'use client'
import React from 'react'
import RoleGuard from '../hoc/RoleGuard';

const organizerDashboard = () => {
  return (
    <div>OrganizerDashboard</div>
  )
}

export default RoleGuard(organizerDashboard);