import styled from "styled-components"
import { iconRotate } from "../components/Header/styles"

export const Container = styled.div`
    padding-top: 4rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding-left: 1.11vw;
    padding-right: 1.11vw;

    @media (max-width: 480px) {
        padding-left: 0.075rem;
        padding-right: 0.075rem;
    }
`

export const ProjectsContainer = styled.main`
    display: grid;
    align-items: start;
    padding: 1.25rem 0;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
    column-gap: 1rem;
    row-gap: 1.5rem;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    div {
        display: grid;
        align-items: start;
        row-gap: 1.5rem;
    }
`

export const Loading = styled.div`
    height: 90vh;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        animation: ${iconRotate} 15s linear infinite;
    }
`
export const Heading = styled.h2`
    color: ${({ theme }) => theme.colors.themeText};
    font-size: 2.25rem;
    font-weight: 400;
    line-height: 125%;
    max-width: 74.25rem;
    letter-spacing: -0.008em;
`
