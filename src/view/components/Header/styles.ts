import styled, { keyframes } from "styled-components"

export const iconRotate = keyframes`
    0%{
            rotate: 0deg;
        }

    100%{
            rotate: calc(360deg * 3);
    }
`

export const Container = styled.header`
    margin-top: 1.25rem;

    margin-left: 1.11vw;
    margin-right: 1.11vw;

    background-color: ${(props) =>
        props.theme.colors.neutrals.themeNeutral_200};

    padding: 0.625rem;
    display: flex;
    column-gap: 1rem;
    align-items: center;
    justify-content: space-between;

    border-radius: 0.75rem;

    color: ${(props) => props.theme.colors.themeText};
    font-size: 0.9375rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr 0.5fr;
    }

    @media (max-width: 480px) {
        margin-left: 0.75rem;
        margin-right: 0.75rem;
    }
`

export const TimeStamp = styled.div`
    display: flex;
    align-items: center;
    column-gap: 4.5rem;

    svg {
        animation: ${iconRotate} 15s linear infinite;
    }

    @media (max-width: 900px) {
        column-gap: 1rem;
    }
`
