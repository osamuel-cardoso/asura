import styled from "styled-components"

export const Container = styled.label`
    font-size: 0.9375rem;

    padding: 0.75rem 1rem;

    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.neutrals.themeNeutral_400};

    transition: ease-in 0.125s;

    &:hover {
        border-color: ${({ theme }) => theme.colors.neutrals.themeNeutral_500};
    }

    cursor: pointer;

    &:has(:checked) {
        background-color: ${({ theme }) => theme.colors.themePrimary};
    }
`
export const Radio = styled.input`
    display: none;
    width: 100%;
    height: 100%;
`
