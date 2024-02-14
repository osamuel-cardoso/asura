import styled from "styled-components"

export const View = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.themeBackground};
    height: 100vh;
    width: 100%;

    color: ${({ theme }) => theme.colors.themeText};
`
export const Header = styled.header`
    font-size: 0.9375rem;
    font-weight: 500;
    text-transform: uppercase;

    display: grid;
    grid-template-columns: 30% 60%;
    justify-content: space-between;

    ul {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
`

export const LeftWrapper = styled.div`
    display: flex;
    gap: 0.75rem;
    justify-content: space-between;
    align-items: center;
`
export const RightWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;
`
export const Footer = styled.footer`
    display: grid;
    grid-template-columns: 30% 60%;
    justify-content: space-between;
    gap: 1rem;
`

export const TextContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
export const TextRight = styled.div`
    text-align: right;
`
export const TextLeft = styled.div``

export const TextGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`
export const TextAccent = styled.span`
    color: ${({ theme }) => theme.colors.neutrals.themeNeutral_400};
`
export const TextIcon = styled.div`
    display: flex;
    gap: 0.5rem;

    img {
        max-height: 1rem;
    }
`
export const Main = styled.div`
    width: 100%;
`
export const MainText = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    align-items: center;
    justify-content: center;
    text-align: center;

    h1 {
        font-size: 2.75rem;
        max-width: 85.75rem;
    }

    p {
        color: ${({ theme }) => theme.colors.neutrals.themeNeutral_500};

        font-size: 1.125rem;

        font-weight: 400;
        line-height: 135%;
        letter-spacing: 0.0135rem;

        max-width: 52rem;
    }
`
