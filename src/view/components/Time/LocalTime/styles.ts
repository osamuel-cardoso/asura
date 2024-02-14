import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${({ theme }) => theme.colors.neutrals.themeNeutral_700};
    font-size: 0.9375rem;

    &::before {
        content: "";
        width: 0.25rem;
        height: 0.25rem;
        background-color: ${({ theme }) => theme.colors.themePrimary};
        border-radius: 999999rem;
    }
`
