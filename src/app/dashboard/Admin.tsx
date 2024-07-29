'use client'

import React from 'react'

const Admin = (props: any) => {
    return (
        <>
            <h1>Welcome to Dashboard</h1>
            <p>Email: {props.email ?? '-'}</p>
        </>
    )
}

export default Admin