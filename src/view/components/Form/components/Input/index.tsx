/* eslint-disable react/display-name */
import { ComponentProps, forwardRef } from "react"
import { useFormContext } from "react-hook-form"
import { Container, InputElementContainer, Marker } from "./styles"

interface InputTypes extends ComponentProps<"input"> {}

export const Input = forwardRef<HTMLInputElement, InputTypes>(
    ({ id, title, placeholder, type, ...props }, ref) => {
        const {
            formState: { errors },
        } = useFormContext()
        return (
            <Container>
                <label htmlFor={id}>{title}</label>
                <>
                    <InputElementContainer>
                        <input
                            placeholder={placeholder}
                            ref={ref}
                            id={id}
                            type={type}
                            {...props}
                        />
                        <Marker />
                        {errors.root?.message}
                    </InputElementContainer>
                </>
            </Container>
        )
    },
)
