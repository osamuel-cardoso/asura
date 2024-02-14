import { TeamCard } from "./components/TeamCard"
import { Container, GridThirdCol, GridTwoCol } from "./styles"

import cardBernardo from "../../../../imgs/card__bernardo.svg"
import cardSamuel from "../../../../imgs/card__samuel.svg"
import cardVinicius from "../../../../imgs/card__vinicius.svg"
import cardDaniele from "../../../../imgs/card__daniele.svg"
import { CardJoin } from "./components/CardJoin"

export function Team() {
    return (
        <Container>
            <GridThirdCol>
                <TeamCard
                    name="Bernardo Nascimento"
                    role="Founder & Brand Designer"
                    state="RS"
                    img={cardBernardo}
                />
                <TeamCard
                    name="Samuel Cardoso"
                    role="UI Designer & Desenvolvedor Next.js"
                    state="PB"
                    img={cardSamuel}
                />
                <TeamCard
                    name="Eduardo Vinicius"
                    role="Consultor & Desenvolvedor Sênior"
                    state="BA"
                    img={cardVinicius}
                />
            </GridThirdCol>
            <GridTwoCol>
                <TeamCard
                    name="Daniele Neves"
                    role="Estrategista de Marca"
                    state="RS"
                    img={cardDaniele}
                />
                <CardJoin />
            </GridTwoCol>
        </Container>
    )
}
