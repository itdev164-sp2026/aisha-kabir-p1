import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"

const Container = styled.div`
    max-width: 700px;
    margin: 0 auto;
`
const Card = styled.div`
    background: #fff8fb;
    border: 1px solid #f0d9e4;
    border-radius: 16px;
    padding: 2rem;
`

const ContactPage = () => (
    <Layout>
        <Container>
            <Card>
                <h1>Contact</h1>
                <p>
                    Thank you for visiting Blooming Motherhood.
                </p>
                <p>
                    For questions, feedback, or collaboration inquiries, please reach out at:
                </p>
                <p>
                    <strong>Email:</strong> aishakabir@example.com
                </p>
            </Card>
        </Container>
    </Layout>
)

export const Head = () => <Seo title="Contact" />

export default ContactPage