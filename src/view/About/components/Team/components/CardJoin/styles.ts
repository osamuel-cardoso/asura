import { styled } from "styled-components"

export const Container = styled.div`
    padding: 1.25rem 1.75rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.neutrals.themeNeutral_300};

    width: 100%;
    height: 100%;
    max-height: 32.5rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const TextCap = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${({ theme }) => theme.colors.themeText};
    font-size: 1.0625rem;
    line-height: 125%;
    letter-spacing: -0.01275rem;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`
export const Paragraph = styled.div`
    color: ${({ theme }) => theme.colors.neutrals.themeNeutral_600};
    font-size: 1.3125rem;
    line-height: 125%;
    letter-spacing: -0.01575rem;
`
