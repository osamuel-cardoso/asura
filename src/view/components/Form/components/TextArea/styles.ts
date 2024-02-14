import styled from "styled-components"

export const TextAreaContainer = styled.div`
    position: relative;

    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    textarea {
        width: 100%;
        padding: 1rem 0.75rem;
        border-radius: 0.375rem;

        resize: none;

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

    textarea:not(:placeholder-shown):not(:invalid) + div {
        background-color: ${({ theme }) => theme.colors.themePrimary};
    }
`

export const Marker = styled.div`
    position: absolute;
    top: 20%;
    right: 3%;

    width: 0.5rem;
    height: 0.5rem;

    border-radius: 999999999rem;

    background-color: ${({ theme }) => theme.colors.neutrals.themeNeutral_400};
`
