import "styled-components"

declare module "styled-components" {
    export interface DefaultTheme {
        font: {
            fontFamily: string
        }

        colors: {
            themePrimary: string

            themeText: string
            themeBackground: string

            neutrals: {
                themeNeutral_800: string
                themeNeutral_700: string
                themeNeutral_600: string
                themeNeutral_500: string
                themeNeutral_400: string
                themeNeutral_300: string
                themeNeutral_200: string
                themeNeutral_100: string
            }
        }
    }
}
