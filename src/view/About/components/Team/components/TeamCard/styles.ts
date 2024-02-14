import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;

    h4 {
        color: ${({ theme }) => theme.colors.themeText};
        text-align: center;
        font-size: 1.1875rem;
        font-weight: 600;
        line-height: 125%;
        letter-spacing: -0.01875rem;
    }
    span {
        color: ${({ theme }) => theme.colors.neutrals.themeNeutral_500};
        font-size: 1.0625rem;

        line-height: 125%;
        letter-spacing: -0.01575rem;
    }
`
export const Image = styled.img`
    width: 100%;
`
export const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 28.5rem;
`

export const Label = styled.div`
    position: absolute;
    left: 1rem;
    top: 1rem;

    padding: 0.625rem 0.75rem;

    color: ${({ theme }) => theme.colors.neutrals.themeNeutral_100};
    font-size: 0.9375rem;
    line-height: 90%;
    letter-spacing: -0.01125rem;
    text-transform: uppercase;

    border-radius: 0.75rem;
    background: rgba(246, 246, 246, 0.75);
`
