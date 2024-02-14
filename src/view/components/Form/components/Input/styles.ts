import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const InputElementContainer = styled.div`
    position: relative;

    input {
        width: 100%;
        padding: 1rem 0.75rem;
        border-radius: 0.375rem;

        font-size: 1.0625rem;
        color: ${({ theme }) => theme.colors.themeText};
        background-color: transparent;
        border: 1px solid
            ${({ theme }) => theme.colors.neutrals.themeNeutral_400};

        transition: ease-in 0.12s;

        &:focus {
            border: 1px solid
                ${({ theme }) => theme.colors.neutrals.themeNeutral_600};
        }

        &::placeholder {
            color: ${({ theme }) => theme.colors.neutrals.themeNeutral_500};
            font-weight: 500;
        }
    }

    input:not(:placeholder-shown):not(:invalid) + div {
        background-color: ${({ theme }) => theme.colors.themePrimary};
    }
`

export const Marker = styled.div`
    position: absolute;
    top: 45%;
    right: 0.75rem;

    width: 0.5rem;
    height: 0.5rem;

    border-radius: 999999999rem;

    background-color: ${({ theme }) => theme.colors.neutrals.themeNeutral_400};
`
