import { Container } from "./styles"

export function Title({ title, content }: { title: string; content: string }) {
    return (
        <Container>
            <h4>{title}</h4>
            <p>{content}</p>
        </Container>
    )
}
