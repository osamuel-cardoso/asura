import { DevTool } from "@hookform/devtools"
import { useContext } from "react"
import { useFormContext } from "react-hook-form"
import { stepContext } from "../../../App/contexts/stepContext"
import { AboutStep } from "./components/AboutStep"
import { DetailStep } from "./components/DetailsStep"
import { FormLayout } from "./components/Layout"
import { ScopeStep } from "./components/ScopeStep"

export function ContactForm() {
    const { step, stepName, handlePreviusStep, handleSetNextStep } =
        useContext(stepContext)
    const { control } = useFormContext()

    return (
        <FormLayout step={step} stepName={stepName}>
            <form>
                {step === 1 && <AboutStep />}
                {step === 2 && <ScopeStep />}
                {step === 3 && <DetailStep />}
            </form>
            <button onClick={handlePreviusStep}>Ugly girls</button>
            <button onClick={handleSetNextStep}>Beatiful girls</button>
            <DevTool control={control} />
        </FormLayout>
    )
}
