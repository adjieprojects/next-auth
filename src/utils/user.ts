import { verifySession } from "@/lib/session";
import { cookies } from "next/headers";
import { cache } from "react";

export const getUserEmail = cache(async () => {
    const session = await verifySession()
    const user = {
        email: session.email,
        session: cookies().get('session')?.value
    }

    return user
})