import { BackToTop } from "./styles"
import { ArrowIcon } from "../ArrowIcon"

export function MoveToTop() {
    return (
        <BackToTop
            href="/"
            onClick={(event) => {
                event.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
            }}
        >
            Voltar para o topo
            <ArrowIcon />
        </BackToTop>
    )
}
