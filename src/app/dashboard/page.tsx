import { getUserEmail } from '@/utils/user'
import React from 'react'
import Admin from './Admin'
import { LogoutForm } from './logoutForm'

const Dashboard = async () => {
    const user = await getUserEmail()
    const email = user?.email


    return (
        <>
            <Admin email={email} />
            <LogoutForm />
        </>
    )
}

export default Dashboard