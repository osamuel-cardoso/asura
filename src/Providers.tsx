import { useEffect, useState } from "react"

import { PrismicProvider } from "@prismicio/react"
import { ReactLenis } from "@studio-freight/react-lenis"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "styled-components"
import { FormContext } from "./App/contexts/formContext"
import { StepContextProvider } from "./App/contexts/stepContext"
import { TimeContextProvider } from "./App/contexts/timeContext"
import { WeatherContextProvider } from "./App/contexts/weatherContext"
import { prismicClient } from "./App/services/prismic"
import { GlobalStyles } from "./styles/global"

import { Router } from "./Router/Router"
import themeDark from "./styles/themes/themeDark"
import themeLight from "./styles/themes/themeLight"

const queryClient = new QueryClient()

export function Providers() {
    const [asuraTheme, setAsuraTheme] = useState(themeDark)

    useEffect(() => {
        const currentDate = new Date()
        const currentHour = currentDate.getHours()

        if (currentHour < 6) setAsuraTheme(themeDark)
        if (currentHour >= 6 && currentHour <= 18) setAsuraTheme(themeLight)
    }, [])

    return (
        <ThemeProvider theme={asuraTheme}>
            <ReactLenis root>
                <PrismicProvider client={prismicClient}>
                    <QueryClientProvider client={queryClient}>
                        <WeatherContextProvider>
                            <TimeContextProvider>
                                <FormContext>
                                    <StepContextProvider>
                                        <Router />
                                    </StepContextProvider>
                                </FormContext>
                            </TimeContextProvider>
                        </WeatherContextProvider>
                    </QueryClientProvider>
                </PrismicProvider>
            </ReactLenis>
            <GlobalStyles />
        </ThemeProvider>
    )
}
