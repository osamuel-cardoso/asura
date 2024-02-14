import { useContext } from "react"
import { timeContext } from "../../../../../../../App/contexts/timeContext"
import { weatherContext } from "../../../../../../../App/contexts/weatherContext"
import { Container } from "./styles"

export function TimeStamp() {
    const { temp, isSuccess } = useContext(weatherContext)
    const { hours, min, sec } = useContext(timeContext)

    return (
        <Container>
            {isSuccess && <span>{temp.toString().slice(0, 2)}°</span>}{" "}
            <span>·</span> <span>{hours.toString().padStart(2, "0")}:</span>
            <span>{min.toString().padStart(2, "0")}:</span>
            <span>{sec.toString().padStart(2, "0")}</span>{" "}
            <span>{hours <= 12 ? "AM" : "PM"}</span>
        </Container>
    )
}
