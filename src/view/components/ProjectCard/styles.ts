import { css, styled } from "styled-components";

type VariantSizeProp = {
    $variantSize?: 'small' | 'default' | 'large'
}

const wrapperTypes = {
    default: css`
        height: 28.25rem;
   `,
    small: css`
        height: 19.25rem;
   `,
    large: css`
        height: 37.25rem;
   `

}

export const Card = styled.article<VariantSizeProp>`
    display: grid;
    grid-row: auto;
    row-gap: .75rem;

    div{
        border-radius: .5rem;
        overflow: hidden;
        width: 100%;
        
        ${({ $variantSize = 'default' }) => css`
            ${wrapperTypes[$variantSize]};
        `
    }

        img{
            object-fit: cover;
            width: 100%;
            height: 100%;
            background-color: ${props => props.theme.colors.neutrals.themeNeutral_200};
        }
    }

    footer{
        display: grid;
        grid-row: auto;

        color: ${props => props.theme.colors.themeText};

        h3{
            font-size: 0.8125rem;
            font-weight: 500;
            line-height: 105%;
            text-transform: uppercase;
        }

        p{  
            max-width: 44ch;
            font-size: 0.8125rem;
            font-weight: 400;
            opacity: 0.6;
        }
    }

    @media (max-width:480px){
        row-gap: 1rem;

        div{
            ${wrapperTypes.small}
        }
    }

`