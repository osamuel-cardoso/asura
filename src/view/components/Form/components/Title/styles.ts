import { styled } from "styled-components";

export const Container = styled.div`
    font-size: 1.0625rem;
    font-weight: 500;
    letter-spacing: -0.01275rem;

    h4 {
        color: ${({ theme }) => theme.colors.themeText};
        font-weight: 600;
    }

    p {
        color: ${({ theme }) => theme.colors.neutrals.themeNeutral_600};
    }
`
