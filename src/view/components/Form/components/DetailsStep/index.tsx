import { useFormContext } from "react-hook-form"
import { TextArea } from "../TextArea"
import { Title } from "../Title"
import { Container, FormContainer } from "./styles"
import { CheckBoxes } from "../CheckBox"
import { discoverValues } from "../../../../../utils/formDatas/discoverValues"

export function DetailStep() {
    const { register } = useFormContext()
    return (
        <Container>
            <Title
                title="Tem um projeto e quer fazer com a gente?"
                content="Se possível conte um pouquinho pra gente sobre sua ideia."
            />

            <FormContainer>
                <TextArea
                    id="details"
                    title="Por favor, conte um pouco sobre oque você tem em mente."
                    placeholder="Digite aqui"
                    {...register("details")}
                />

                <CheckBoxes
                    title="Onde você conheceu nosso estúdio?"
                    values={discoverValues}
                />
            </FormContainer>
        </Container>
    )
}
