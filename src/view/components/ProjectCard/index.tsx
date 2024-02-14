import { memo } from "react"
import { Card } from "./styles"

export interface CardProps {
    title: string,
    subtitle: string,
    imgPath: string,
    alt?: string
    size?: 'small' | 'default' | 'large'

}


const ProjectCard = ({ title, subtitle, imgPath, size, alt }: CardProps) => {
    return (
        <Card $variantSize={size} >
            <div>
                <img src={imgPath} loading="lazy" alt={alt} />
            </div>

            <footer>
                <h3>{title}</h3>
                <p>{subtitle}</p>
            </footer>
        </Card >
    )
}

export default memo(ProjectCard) 
