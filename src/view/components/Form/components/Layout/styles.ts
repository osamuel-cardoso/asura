import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    max-width: 37.75rem;
    backdrop-filter: blur(15px);
    padding: 1rem;
    overflow-y: scroll;
    overflow-x: hidden;

    background-color: ${({ theme }) => theme.colors.themeBackground};

    position: fixed;
    top: 0%;
    bottom: 0%;
    left: 0%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
