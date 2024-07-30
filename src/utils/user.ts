'use server'

import { verifySession } from "@/lib/session";
// import { cookies } from "next/headers";
import { cache } from "react";

export const getUserEmail = cache(async () => {
    const session = await verifySession()
    const user = {
        email: session.email,
        password: session.password,
        // session: cookies().get('session')?.value
    }

    return user
})

export const getUser = cache(async () => {
    const session = await verifySession()
    if(!session) return null

    const user = {
        email: session.email,
        password: session.password,
        // session: cookies().get('session')?.value
    }

    return user
})