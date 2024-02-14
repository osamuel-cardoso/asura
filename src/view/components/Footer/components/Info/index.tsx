import { BottomContainer, Container } from "./styles"
import { Email } from "./components/EmailList"
import { EmailContainer } from "./components/EmailList/styles"
import { MoveToTop } from "./components/ToTop"
import { TimeStamp } from "./components/TimeStamp"

export function Info() {
    return (
        <Container>
            <EmailContainer>
                <Email cap="Geral:" email="hello@asura.work" />
                <Email cap="Junte-se a nós:" email="jobs@asura.work" />
                <Email cap="Novos Negócios:" email="partners@asura.work" />
            </EmailContainer>
            <BottomContainer>
                <div>
                    <p>Made in Brazil 🇧🇷</p>
                    <p>
                        Online em <span>Rio Grande do Sul</span>
                    </p>
                </div>

                <TimeStamp />

                <MoveToTop />
            </BottomContainer>
        </Container>
    )
}
