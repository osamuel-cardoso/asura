/* eslint-disable react/display-name */
import { ComponentProps, forwardRef } from "react"
import { Marker, TextAreaContainer } from "./styles"

interface TextAreaTypes extends ComponentProps<"textarea"> {}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaTypes>(
    ({ id, title, placeholder, ...props }, ref) => {
        return (
            <TextAreaContainer>
                <label htmlFor={id}>{title}</label>
                <textarea
                    ref={ref}
                    placeholder={placeholder}
                    id={id}
                    rows={8}
                    maxLength={400}
                    {...props}
                ></textarea>

                <Marker />
            </TextAreaContainer>
        )
    },
)
