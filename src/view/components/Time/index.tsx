import { useContext } from "react"
import { Container } from "./styles"

import { weatherContext } from "../../../App/contexts/weatherContext"
import { IconTime } from "./IconTime"
import { LocalTime } from "./LocalTime"
import { timeContext } from "../../../App/contexts/timeContext"

export function Time() {
    const { temp, isSuccess } = useContext(weatherContext)
    const { hours, min, sec } = useContext(timeContext)

    return (
        <Container>
            <LocalTime />
            <IconTime Hour={hours} />

            {isSuccess && <span>{temp.toString().slice(0, 2)}°</span>}

            <span>·</span>

            <div>
                <span>{hours.toString().padStart(2, "0")}</span>:
                <span>{min.toString().padStart(2, "0")}</span>:
                <span>{sec.toString().padStart(2, "0")}</span>{" "}
                <span>{hours <= 12 ? "AM" : "PM"}</span>
            </div>
        </Container>
    )
}
