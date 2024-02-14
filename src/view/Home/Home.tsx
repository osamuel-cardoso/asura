import { NavLink } from "react-router-dom"
import { useAllPrismicDocumentsByType } from "@prismicio/react"

import { Container, Heading, Loading, ProjectsContainer } from "./styles"

import ProjectCard from "../components/ProjectCard"
import { IconAsura } from "../components/iconAsura/IconAsura"

function Home() {
    const [response] = useAllPrismicDocumentsByType("asura_card_component")

    return (
        <>
            {!response ? (
                <Loading>
                    <IconAsura />
                </Loading>
            ) : (
                <Container>
                    <Heading>
                        Acreditamos que o design é uma ferramenta incrivelmente
                        poderosa capaz de não apenas transformar negócios, mas
                        também de contar histórias.
                    </Heading>

                    <ProjectsContainer>
                        {response?.map((document) => (
                            <NavLink
                                key={document?.id}
                                to={`project/${document?.data.url_project.slug}`}
                            >
                                <ProjectCard
                                    key={document?.id}
                                    title={document?.data.card_title[0].text}
                                    size={document?.data.card_size}
                                    subtitle={
                                        document?.data.card_paragraph[0].text
                                    }
                                    imgPath={document?.data.card_cover.url}
                                    alt={document?.data.card_title[0].text}
                                />
                            </NavLink>
                        ))}
                    </ProjectsContainer>
                </Container>
            )}
        </>
    )
}

export default Home
