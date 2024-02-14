import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    gap: 4rem;

    padding: 1.25rem;
    border-radius: 0.75rem;
    background-color: ${({ theme }) => theme.colors.neutrals.themeNeutral_200};
`
export const BottomContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    color: ${({ theme }) => theme.colors.themeText};

    span {
        color: ${({ theme }) => theme.colors.neutrals.themeNeutral_600};
    }
`
