import styled from "styled-components"

export const Navigation = styled.div`
    border-radius: 999999999999rem;
    display: flex;
    background-color: ${({ theme }) => theme.colors.neutrals.themeNeutral_300};
`
export const Button = styled.div`
    font-size: 0.8125rem;
    padding: 0.5625rem 1rem;
    border-radius: 999999rem;

    color: ${({ theme }) => theme.colors.neutrals.themeNeutral_800};
    text-transform: uppercase;
    transition: ease 0.2s;

    &:hover {
        background-color: ${({ theme }) =>
            theme.colors.neutrals.themeNeutral_400};
    }
`
