import { useFormContext } from "react-hook-form"
import { CheckBoxInput } from "./components/CheckBoxInput"
import { Container, TextContainer } from "./styles"

interface CheckBoxesTypes {
    title: string
    values: {
        id: string
        name: string
        value: string
    }[]
}

export function CheckBoxes({ values, title }: CheckBoxesTypes) {
    const { register } = useFormContext()
    return (
        <TextContainer>
            {title}
            <Container>
                {values.map(({ id, name, value }) => (
                    <CheckBoxInput
                        key={id}
                        id={id}
                        name={name}
                        value={value}
                        register={register}
                    />
                ))}
            </Container>
        </TextContainer>
    )
}
