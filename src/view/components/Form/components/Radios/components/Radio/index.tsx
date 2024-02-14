/* eslint-disable react/display-name */
import { FieldValues, UseFormRegister } from "react-hook-form"
import { firstUppercase } from "../../../../../../../utils/convertString"
import { Container, Radio } from "./styles"

interface RadioInputTypes {
    id: string
    value?: string | number | readonly string[] | undefined
    name: string
    register: UseFormRegister<FieldValues>
}

export const RadioInput = ({ id, name, value, register }: RadioInputTypes) => {
    return (
        <Container htmlFor={id}>
            <Radio
                type="radio"
                id={id}
                value={value}
                {...register(`${name}`, { required: true })}
            />
            {firstUppercase(String(id))}
        </Container>
    )
}
