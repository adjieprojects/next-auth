import { getUser } from '@/utils/user'
import React from 'react'
import Admin from './Admin'
import { LogoutForm } from './logoutForm'
import Wrapper from '@/components/Wrapper'

const Dashboard = async () => {
    const user = await getUser()
    const email = user?.email
    const password = user?.password
    // const session = user?.session

    return (
        <Wrapper>
            <Admin />
            <LogoutForm />
        </Wrapper>
    )
}

export default Dashboard