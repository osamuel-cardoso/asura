import { styled } from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 4rem 0;
    border-top: 1px solid
        ${({ theme }) => theme.colors.neutrals.themeNeutral_400};
    border-bottom: 1px solid
        ${({ theme }) => theme.colors.neutrals.themeNeutral_400};
`
export const GridThirdCol = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
`
export const GridTwoCol = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    gap: 1rem;
`
