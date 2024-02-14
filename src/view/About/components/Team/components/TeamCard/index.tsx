import {
    Container,
    TextContainer,
    Image,
    ImageContainer,
    Label,
} from "./styles"

export function TeamCard({
    name,
    role,
    state,
    img,
}: {
    name: string
    role: string
    state: string
    img: string
}) {
    return (
        <Container>
            <ImageContainer>
                <Label>{state}</Label>
                <Image src={img} alt="" />
            </ImageContainer>
            <TextContainer>
                <h4>{name}</h4>
                <span>{role}</span>
            </TextContainer>
        </Container>
    )
}
