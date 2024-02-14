import { createContext, useEffect, useState } from "react"

type StepType = "Identificação" | "Escopo / Investimento" | "Contexto"

interface StepContextTypes {
    step: number
    stepName: StepType
    handlePreviusStep(): void
    handleSetNextStep(): void
}

export const stepContext = createContext({} as StepContextTypes)

export function StepContextProvider({
    children,
}: {
    children?: React.ReactNode
}) {
    const [step, setStep] = useState(1)
    const [stepName, setStepName] = useState<StepType>("Identificação")

    function handlePreviusStep() {
        step >= 2 && setStep((prevStep) => prevStep - 1)
    }
    function handleSetNextStep() {
        step >= 1 && step < 3 && setStep((prevStep) => prevStep + 1)
    }

    useEffect(() => {
        switch (step) {
            case 1:
                setStepName("Identificação")
                break

            case 2:
                setStepName("Escopo / Investimento")
                break

            case 3:
                setStepName("Contexto")
                break

            default:
                setStepName("Identificação")
                break
        }
    }, [step])

    return (
        <stepContext.Provider
            value={{ step, stepName, handleSetNextStep, handlePreviusStep }}
        >
            {children}
        </stepContext.Provider>
    )
}
