import { useFormContext } from "react-hook-form"
import { RadioInput } from "./components/Radio"
import { Container, TextContainer } from "./styles"

interface RadiosTypes {
    title: string
    values: {
        id: string
        name: string
        value: string
    }[]
}

export function Radios({ values, title }: RadiosTypes) {
    const { register } = useFormContext()
    return (
        <TextContainer>
            {title}
            <Container>
                {values.map(({ id, name, value }) => (
                    <RadioInput
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
