import styled from "styled-components"

export const Container = styled.a`
    display: flex;
    flex-direction: column;
    gap: 5rem;
    padding: 1.25rem;
    border-radius: 0.75rem;
    height: 100%;

    color: ${({ theme }) => theme.colors.themeBackground};
    background-color: ${({ theme }) => theme.colors.neutrals.themeNeutral_800};

    h3 {
        font-size: 1.5rem;
        font-weight: 500;
    }

    transition: ease-in-out 0.2s;

    &:hover {
        color: ${({ theme }) => theme.colors.themeText};
        background-color: ${({ theme }) =>
            theme.colors.neutrals.themeNeutral_400};
    }
`
