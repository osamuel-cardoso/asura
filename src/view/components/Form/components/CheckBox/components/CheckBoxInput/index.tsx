/* eslint-disable react/display-name */
import { FieldValues, UseFormRegister } from "react-hook-form"
import { CheckBox, Container } from "./styles"
import { firstUppercase } from "../../../../../../../utils/convertString"

interface CheckBoxInputType {
    id: string
    value?: string | number | readonly string[] | undefined
    name: string
    register: UseFormRegister<FieldValues>
}

export const CheckBoxInput = ({
    id,
    name,
    value,
    register,
}: CheckBoxInputType) => {
    return (
        <Container htmlFor={id}>
            <CheckBox
                type="checkbox"
                id={id}
                value={value}
                {...register(`${name}`)}
            />
            {firstUppercase(String(id))}
        </Container>
    )
}
