import styled from "styled-components"

export const Heading = styled.h2`
    font-size: 2rem;
    line-height: 125%;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.themeText};

    letter-spacing: -0.004em;
`

export const Paragraph = styled.p`
    color: ${({ theme }) => theme.colors.neutrals.themeNeutral_600};
    font-size: 1.4375rem;
    line-height: 125%;
    letter-spacing: -0.01725rem;
`
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5rem;

    padding-bottom: 5rem;
`
export const ParagraphContainer = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;

    p {
        max-width: 50rem;
    }
`
export const TextCap = styled.div`
    color: ${({ theme }) => theme.colors.themeText};
    font-size: 1.3125rem;

    text-transform: uppercase;
    font-weight: 500;
    line-height: 125%;
    letter-spacing: -0.01575rem;
`

export const FolderContainer = styled.div`
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;

    display: flex;
    flex-direction: column;
    gap: 8rem;
`
export const ShowCap = styled.div`
    color: ${({ theme }) => theme.colors.themeText};
    font-size: 0.9375rem;
`

export const ShowStudio = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`
export const ShowImg = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.5fr;
    gap: 1rem;

    img {
        border-radius: 0.5rem;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const ShowTeam = styled.div`
    padding: 2.5rem 0;
`
