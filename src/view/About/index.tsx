import { Heading } from "../Home/styles"
import { Container } from "../components/Container"
import imgStudio02 from "../../imgs/dl.beatsnoop.png"
import imgStudio01 from "../../imgs/dl.beatsnoop-1.png"
import {
    FolderContainer,
    Paragraph,
    ParagraphContainer,
    ShowCap,
    ShowImg,
    ShowStudio,
    ShowTeam,
    TextCap,
    TextContainer,
} from "./styles"
import { Team } from "./components/Team"

export function About() {
    return (
        <Container>
            <FolderContainer>
                <Heading>
                    Somos a Asura, um estúdio que trabalha em um processo de
                    ponta a ponta uma caminhada com os clientes ao nosso lado.
                    De start-ups a corporações fazemos sua marca decolar por
                    meio de um processo de design consistente intencional e
                    flexível.
                </Heading>

                <ShowStudio>
                    <ShowCap>
                        Nosso estúdio <br />
                        Rio Grande / Rio Grande do Sul
                    </ShowCap>

                    <ShowImg>
                        <img src={imgStudio01} alt="" />
                        <img src={imgStudio02} alt="" />
                    </ShowImg>
                </ShowStudio>
            </FolderContainer>
            <ShowTeam>
                <TextContainer>
                    <Heading>
                        Trabalhamos em conjunto, colaborando uns com os outros e
                        explorando cada ideia em busca das melhores soluções
                        para nossos clientes.
                    </Heading>

                    <ParagraphContainer>
                        <TextCap>SOBRE</TextCap>
                        <Paragraph>
                            Nosso estúdio é o lar de uma equipe apaixonada de
                            designers especializados em marca, estratégia e
                            design digital. Valorizamos a opinião de cada
                            cliente e acreditamos na transparência em todo o
                            processo de criação da sua marca. Adoramos fazer
                            perguntas e trocar ideias desde o início até o fim.
                            Nossa abordagem é fluida, permitindo iterações
                            conforme suas necessidades evoluem.
                            <br />
                            <br />
                            Cada projeto é importante para nós,
                            independentemente do tamanho. Mantemos uma
                            comunicação constante e colaboração interna para
                            garantir que suas expectativas sejam atendidas.
                        </Paragraph>
                    </ParagraphContainer>
                </TextContainer>
                <Team />
            </ShowTeam>
        </Container>
    )
}
