import { useParams } from "react-router-dom"

import { usePrismicDocumentByUID } from "@prismicio/react"
import { Loading } from "../Home/styles"
import { IconAsura } from "../components/iconAsura/IconAsura"

export function Project() {
    const { slug } = useParams()
    const [document] = usePrismicDocumentByUID("asura_case", String(slug))

    return (
        <>
            {!document ? (
                <Loading>
                    <IconAsura />
                </Loading>
            ) : (
                <div>
                    <h1>{document?.data.case_tittle[0].text}</h1>
                </div>
            )}
        </>
    )
}

export default Project
