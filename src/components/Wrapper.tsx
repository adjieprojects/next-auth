import { getUser } from '@/utils/user'
import React from 'react'
import Auth from './Auth'

const Wrapper = async ({ children }: { children: React.ReactNode }) => {
    const user_ = await getUser()

    return (
        <div>
            <Auth data={user_}/>
            {children}
        </div>
    )
}

export default Wrapper