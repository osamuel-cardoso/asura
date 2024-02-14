import { Link } from "react-router-dom"
import { Cta } from "./components/Cta"
import { Info } from "./components/Info"
import { Newsletter } from "./components/Newsletter"
import {
    BottomNav,
    CardContainer,
    CardsContainer,
    Container,
    FooterBottom,
} from "./styles"

export function Footer() {
    return (
        <Container>
            <CardsContainer>
                <CardContainer>
                    <Cta />
                    <Newsletter />
                </CardContainer>
                <Info />
            </CardsContainer>
            <FooterBottom>
                <BottomNav>
                    <Link to={"/"}>instagram</Link>
                    <Link to={"/"}>linkedin</Link>
                    <Link to={"/"}>behance</Link>
                </BottomNav>
                © 2023 estúdio criativo asura
            </FooterBottom>
        </Container>
    )
}
