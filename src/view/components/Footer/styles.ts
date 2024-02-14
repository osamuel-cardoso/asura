import styled from "styled-components"

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.themeText};
`

export const CardsContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.themeBackground};
    padding: 1.25rem;
    border-radius: 0rem 0rem 1.25rem 1.25rem;

    display: grid;
    grid-template-columns: 0.75fr 1fr;
    gap: 1rem;

    @media (max-width: 680px) {
        grid-template-columns: 1fr;
        padding-left: 0.075rem;
        padding-right: 0.075rem;
    }
`
export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const FooterBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    text-transform: uppercase;
    color: #010101;
    font-weight: 500;

    padding: 1.25rem 1rem;
`
export const BottomNav = styled.div`
    display: flex;
    gap: 1.5rem;

    a {
        font-size: 0.9375rem;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.neutrals.themeNeutral_100};
        transform: ease 0.3s;

        &:hover {
            color: ${({ theme }) => theme.colors.neutrals.themeNeutral_700};
        }
    }
`
