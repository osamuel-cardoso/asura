import { useFormContext } from "react-hook-form"
import { Input } from "../Input"
import { Title } from "../Title"
import { Container, FormContainer, InputsContainer } from "./styles"
import { Radios } from "../Radios"
import { employeeValues } from "../../../../../utils/formDatas/employeesValues"

export function AboutStep() {
    const { register } = useFormContext()
    return (
        <Container>
            <Title
                title="Tem um projeto e quer fazer com a gente?"
                content=" Basta preencher este breve formulário, que entraremos em
            contato."
            />

            <FormContainer>
                <Input
                    id="name"
                    type="text"
                    title="Qual o seu nome?"
                    placeholder="Digite o seu nome"
                    required
                    {...register("name", { required: true })}
                />
                <Input
                    id="email"
                    type="email"
                    title="Seu e-mail"
                    placeholder="exemplo@email.com"
                    required
                    {...register("email", { required: true })}
                />
                <InputsContainer>
                    <Input
                        id="enterprise"
                        type="text"
                        title="Qual o nome da sua empresa?"
                        placeholder="Digite aqui"
                        required
                        {...register("enterprise", { required: true })}
                    />
                    <Input
                        id="position"
                        type="text"
                        title="Qual o seu cargo?"
                        placeholder="Digite aqui"
                        required
                        {...register("position", { required: true })}
                    />
                </InputsContainer>

                <Radios
                    title="Quantos colaboradores você tem?"
                    values={employeeValues}
                />
            </FormContainer>
        </Container>
    )
}
