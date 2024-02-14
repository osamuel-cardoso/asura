import { styled } from "styled-components"

export const Container = styled.div`
    text-transform: uppercase;

    display: inline-flex;
    padding: 0.5rem 0.75rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;

    border-radius: 999999999rem;
    border: 1px solid ${({ theme }) => theme.colors.neutrals.themeNeutral_400};
    color: ${({ theme }) => theme.colors.neutrals.themeNeutral_600};
`
