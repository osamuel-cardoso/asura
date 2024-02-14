import { useContext } from "react"
import { timeContext } from "../../App/contexts/timeContext"
import { weatherContext } from "../../App/contexts/weatherContext"
import { formatChar } from "../../utils/addChar"
import { Button } from "./components/Button"
import { Pill } from "./components/Pill"
import { IconAsura } from "./components/iconAsura"
import {
  Footer,
  Header,
  LeftWrapper,
  Main,
  MainText,
  RightWrapper,
  TextAccent,
  TextContainer,
  TextGrid,
  TextLeft,
  TextRight,
  View,
} from "./styles"

export function Wait() {
    const { hours, min, sec } = useContext(timeContext)
    const { temp } = useContext(weatherContext)

    return (
        <View>
            <Header>
                <LeftWrapper>
                    <IconAsura />
                    <Button />
                </LeftWrapper>
                <RightWrapper>
                    <span>NEW WEBSITE COMING SOON.</span>
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/estudioasura">
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/79700851/">
                                Linkedin
                            </a>
                        </li>
                        <li>
                            <a href="https://www.behance.net/estudioasura">
                                Behance
                            </a>
                        </li>
                    </ul>
                </RightWrapper>
            </Header>

            <Main>
                <MainText>
                    <Pill content="We Are Asura" />
                    <h1>
                        Ajudamos start-ups e grandes empresas a aumentarem a
                        percepção de valor de suas marcas através do design
                        consistente, intencional e flexível.
                    </h1>

                    <p>
                        Somos a Asura, um estúdio de design que trabalha em um
                        processo de ponta a ponta em uma caminhada com os
                        clientes ao nosso lado. criamos marcas, interfaces e
                        desenvolvemos sites para empresas que querem ser
                        referência em seus setores.
                    </p>
                    <Pill content="Site em construção" />
                </MainText>
            </Main>

            <Footer>
                <TextContainer>
                    <TextGrid>
                        <TextLeft>Made in Brazil 🇧🇷</TextLeft>
                        <TextLeft>
                            Online em <TextAccent>Rio Grande do Sul</TextAccent>
                        </TextLeft>
                    </TextGrid>

                    <TextGrid>
                        <TextRight>Ouvindo Rolling Stones</TextRight>
                        <TextRight>
                            {temp && (
                                <TextAccent>
                                    {temp?.toString().slice(0, 2)}° ·
                                    {formatChar(String(hours))}:
                                    {formatChar(String(min))}:
                                    {formatChar(String(sec))}
                                </TextAccent>
                            )}
                        </TextRight>
                    </TextGrid>
                </TextContainer>

                <TextContainer>
                    <TextGrid>
                        <TextLeft>
                            <TextAccent>Contato:</TextAccent>
                        </TextLeft>
                        <TextLeft>
                            <a href="mailto:hello@asura.work">
                                HELLO@ASURA.WORK
                            </a>
                        </TextLeft>
                    </TextGrid>

                    <TextGrid>
                        <TextRight>
                            <TextAccent>© 2024</TextAccent>
                        </TextRight>

                        <TextRight>
                            <TextAccent>ESTÚDIO CRIATIVO ASURA</TextAccent>
                        </TextRight>
                    </TextGrid>
                </TextContainer>
            </Footer>
        </View>
    )
}
