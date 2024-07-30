'use server'

import { createSession, deleteSession } from '@/lib/session'
import bcrypt from 'bcrypt'

export const handleLogin = async (data: any) => {
    const inputEmail = data?.email
    const inputPassword = data?.password

    const hashedPassword = await bcrypt.hash(inputPassword, 10)

    await createSession(inputEmail, hashedPassword)
}

export const handleLogout = async () => {
    await deleteSession()
}