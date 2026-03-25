import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"

const Container = styled.div`
    max-width: 850px;
    margin: 0 auto;
`
const Card = styled.div`
    background: #fff8fb;
    border: 1px solid #f0d9e4;
    border-radius: 16px;
    padding: 2rem;
`

const AboutPage = () => (
    <Layout>
        <Container>
            <Card>
                <h1>About</h1>
                <p>
                    Blooming Motherhood is a blog dedicated to sharing reflections,
                    encouragement, and honest thoughts about motherhood. This space was
                    created to explore the beauty, growth, and challenges that come with
                    raising children and growing as a mother.
                </p>
                <p>
                    Through personal reflections and thoughtful blog posts, Blooming
                    Motherhood aims to offer warmth, inspiration, and connection to mothers
                    in every stage of the journey.
                </p>
            </Card>
        </Container>
    </Layout>
)

export const Head = () => <Seo title="About" />

export default AboutPage