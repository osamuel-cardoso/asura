import styled from "styled-components"

export const Container = styled.div`
    padding: 0.5rem;
    background-color: ${({ theme }) => theme.colors.neutrals.themeNeutral_300};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 999999rem;

    color: ${({ theme }) => theme.colors.themeText};
`
