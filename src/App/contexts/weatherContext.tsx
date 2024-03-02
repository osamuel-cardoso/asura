import { useQuery } from "@tanstack/react-query"
import React, { createContext } from "react"
import { WEATHER_URL } from "../services/weatherApi"

interface weatherContext {
    weatherResponse: object
    temp: string
    isSuccess: boolean
}

export const weatherContext = createContext<weatherContext>({
} as weatherContext)

export function WeatherContextProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const { data: weatherResponse, isSuccess } = useQuery({
        queryKey: ["weather"],
        queryFn: async () => {
            const data = fetch(WEATHER_URL).then((response) => response.json())
            return data
        },
        refetchInterval: false,
    })

    const temp = String(weatherResponse?.main.temp)

    return (
        <weatherContext.Provider value={{ weatherResponse, temp, isSuccess }}>
            {children}
        </weatherContext.Provider>
    )
}
