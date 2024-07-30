'use client'

import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext<any>({})

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState({})

    return (
        <AppContext.Provider value={{ user, setUser }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}