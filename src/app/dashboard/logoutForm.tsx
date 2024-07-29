'use client'

import { handleLogout } from '@/actions/auth'
import React from 'react'

export const LogoutForm = () => {
    return (
        <p>
            <button onClick={async () => {
                await handleLogout()
            }}>Logout</button>
        </p>
    )
}