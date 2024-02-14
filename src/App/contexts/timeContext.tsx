import { createContext, useEffect, useState } from "react"

interface timeContextTypes {
    hours: number
    min: number
    sec: number
}

export const timeContext = createContext<timeContextTypes>({
    hours: new Date().getHours(),
    min: new Date().getMinutes(),
    sec: new Date().getSeconds(),
})

export function TimeContextProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [time, setTime] = useState<timeContextTypes>({
        hours: new Date().getHours(),
        min: new Date().getMinutes(),
        sec: new Date().getSeconds(),
    })

    useEffect(() => {
        const updateTime = setTimeout(() => {
            setTime({
                hours: new Date().getHours(),
                min: new Date().getMinutes(),
                sec: new Date().getSeconds(),
            })
        }, 1000)

        return () => clearTimeout(updateTime)
    }, [time])

    const hours = time.hours
    const min = time.min
    const sec = time.sec

    return (
        <timeContext.Provider value={{ hours, min, sec }}>
            {children}
        </timeContext.Provider>
    )
}
