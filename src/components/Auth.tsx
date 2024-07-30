'use client'

import { useAppContext } from "@/context";
import { useEffect } from "react";

const Auth = ({ data }: { data: any }) => {
    const { setUser } = useAppContext()

    useEffect(() => {
        setUser(data)
    })

    return null
}

export default Auth