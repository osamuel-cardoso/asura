import styled from "styled-components"

export const Container = styled.div`
    background-color: ${(props) =>
        props.theme.colors.neutrals.themeNeutral_300};
    color: ${(props) => props.theme.colors.themeText};
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    padding: 0.5625rem 1rem;
    border-radius: 99999rem;
`
