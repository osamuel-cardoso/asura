import { FormContext } from "../../App/contexts/formContext"
import { ContactForm } from "../components/Form"

export default function Contact() {
    return (
        <FormContext>
            <ContactForm />
        </FormContext>
    )
}
