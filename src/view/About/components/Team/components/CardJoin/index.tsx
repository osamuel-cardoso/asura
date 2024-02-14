import { IconAdd } from "./components/IconAdd"
import { Container, Paragraph, TextCap, TextContainer } from "./styles"

export function CardJoin() {
    return (
        <Container>
            <TextContainer>
                <TextCap>
                    <IconAdd />
                    Faça parte da nossa equipe!
                </TextCap>
                <Paragraph>Interessado em se juntar a Asura?</Paragraph>
            </TextContainer>
            <span>(Junte-se)</span>
        </Container>
    )
}
