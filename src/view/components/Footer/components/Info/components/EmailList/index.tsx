import { Container } from "./styles"

export function Email({ cap, email }: { cap: string; email: string }) {
    return (
        <Container>
            <span>{cap}</span>
            <h3>{email}</h3>
        </Container>
    )
}
