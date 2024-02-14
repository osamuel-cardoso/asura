import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    span {
        color: ${({ theme }) => theme.colors.neutrals.themeNeutral_500};
        font-size: 0.9375rem;
        font-weight: 500;
        line-height: 125%; /* 1.17188rem */
        letter-spacing: -0.01125rem;
    }

    h3 {
        color: ${({ theme }) => theme.colors.themeText};
        font-size: 1.3125rem;
        font-weight: 500;
        line-height: 125%;
        letter-spacing: -0.0158rem;
    }
`

export const EmailContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`
