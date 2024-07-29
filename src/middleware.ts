import { decrypt } from '@/lib/session'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    const protectedRoutes = ['/dashboard']
    const publicRoutes = ['/login']
    const currentPath = request.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(currentPath)
    const isPublicRoute = publicRoutes.includes(currentPath)

    if(isProtectedRoute) {
        const cookie = cookies().get('session')?.value
        const session = await decrypt(cookie)

        if(!session?.email) {
            return NextResponse.redirect(new URL('/login', request.nextUrl))
        }
    }

    if(isPublicRoute) {
        const cookie = cookies().get('session')?.value
        const session = await decrypt(cookie)

        if(session?.email) {
            return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/((?!api|_next/static|_next/image).*)',
}