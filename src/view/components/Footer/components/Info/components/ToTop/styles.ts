import { styled } from "styled-components"

export const BackToTop = styled.a`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: ease-in-out 0.15s;

    &:hover {
        color: ${({ theme }) => theme.colors.themePrimary};
    }
`
