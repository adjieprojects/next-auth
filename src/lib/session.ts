import 'server-only'
import { SessionPayload } from "@/definitions"
import { jwtVerify, SignJWT } from "jose"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// openssl rand -base64 32
const key = new TextEncoder().encode(process.env.SECRET);

const cookie = {
    name: 'session',
    options: { httpOnly: true, secure: true, samSite: 'lax', path: '/' },
    duration: 24 * 60 * 60 * 1000
}

export const encrypt = async (payload: SessionPayload) => {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('1day')
        .sign(key)
}
export const decrypt = async (session: string | undefined = '') => {
    try {
        const { payload } = await jwtVerify(session, key, {
            algorithms: ['HS256']
        })
        return payload
    } catch (error) {
        return null
    }
}

export const createSession = async (email: string) => {
    const expires = new Date(Date.now() + cookie.duration)
    const session = await encrypt({ email, expires })

    cookies().set(cookie.name, session, { ...cookie.options, expires })
    redirect('/dashboard')
}
export const verifySession = async () => {
    const cookie_ = cookies().get(cookie.name)?.value
    const session = await decrypt(cookie_)
    if (!session?.email) {
        redirect('/login')
    }

    return { email: session.email }
}
export const deleteSession = async () => {
    cookies().delete(cookie.name)
    redirect('/')
}