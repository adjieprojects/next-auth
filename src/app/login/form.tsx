'use client'

import { handleLogin } from '@/actions/auth'
import React, { FormEvent } from 'react'

export const LoginForm = () => {
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        let email = formData.get('email')
        let password = formData.get('password')

        await handleLogin({ email, password })
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <input type="email" name="email" placeholder="Email" />
            </p>
            <p>
                <input type="password" name="password" placeholder="Password" />
            </p>

            <p>
                <button type="submit">Login</button>
            </p>
        </form>
    )
}