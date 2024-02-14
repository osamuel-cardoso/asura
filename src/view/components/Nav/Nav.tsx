import { NavLink } from "react-router-dom"
import { Button, Navigation } from "./styles"

export default function Nav() {
    return (
        <Navigation>
            <Button>
                <NavLink to={"/"}>Home</NavLink>
            </Button>
            <Button>
                <NavLink to={"/"}>Projetos</NavLink>
            </Button>
            <Button>
                <NavLink to={"/about"}>Sobre</NavLink>
            </Button>
            <Button>
                <NavLink to={"/contact"}>Contato</NavLink>
            </Button>
        </Navigation>
    )
}
