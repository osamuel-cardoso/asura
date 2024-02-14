import { createClient } from "@prismicio/client"

export const repo = import.meta.env.VITE_PRISMIC_REPO_NAME

export const prismicClient = createClient(repo, {
    accessToken: import.meta.env.VITE_PRISMIC_REPO_KEY,
})
