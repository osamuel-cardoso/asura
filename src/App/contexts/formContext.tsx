import { FormProvider, useForm } from "react-hook-form"

export function FormContext({ children }: { children: React.ReactNode }) {
    const methods = useForm()
    return <FormProvider {...methods}>{children}</FormProvider>
}
