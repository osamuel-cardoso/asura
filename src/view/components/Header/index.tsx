import { Container, TimeStamp } from "./styles"
import Nav from "../Nav/Nav"

import { IconAsura } from "../iconAsura/IconAsura"

import { useMediaQuery } from "react-responsive"

import IconMenu from "../IconMenu/iconMenu"
import { Time } from "../Time"

export function Header() {
    const isMobile = useMediaQuery({ maxWidth: "768px" })

    return (
        <Container>
            <TimeStamp>
                <IconAsura />
                <Time />
            </TimeStamp>

            {isMobile && <IconMenu />}
            {!isMobile && <Nav />}
        </Container>
    )
}
