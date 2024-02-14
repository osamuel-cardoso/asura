import { useFormContext } from "react-hook-form"
import { servicesValues } from "../../../../../utils/formDatas/servicesValues"
import { CheckBoxes } from "../CheckBox"
import { Title } from "../Title"
import { Container, FormContainer } from "./styles"
import { Radios } from "../Radios"
import { timeValues } from "../../../../../utils/formDatas/timeValues"
import { budgetValues } from "../../../../../utils/formDatas/budgetValues"

export function ScopeStep() {
    const { register } = useFormContext()

    return (
        <Container>
            <Title
                title="Tem um projeto e quer fazer com a gente?"
                content=" Basta preencher este breve formulário, que entraremos em
                contato."
            />

            <FormContainer>
                <CheckBoxes
                    values={servicesValues}
                    title="Quais serviços que você deseja contratar?"
                />
                <Radios
                    title="Quanto tempo você tem disponível para o projeto?"
                    values={timeValues}
                />
                <Radios
                    title="Qual é o orçamento estimado?"
                    values={budgetValues}
                />
            </FormContainer>
        </Container>
    )
}
