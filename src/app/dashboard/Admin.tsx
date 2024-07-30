'use client'

import { useAppContext } from '@/context'
import React from 'react'

const Admin = () => {
    const { user } = useAppContext()

    return (
        <>
            <h1>Welcome to Dashboard</h1>
            <p>Email: {user.email ?? '-'}</p>
            <p>Password: {user.password ?? '-'}</p>
            {/* <p>Session: {user.session ?? '-'}</p> */}
        </>
    )
}

export default Admin