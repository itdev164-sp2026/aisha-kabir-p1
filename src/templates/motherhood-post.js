import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Container = styled.div`
    max-width: 700px;
    margin: 0 auto;
    padding: 2rem 0;
`
const Title = styled.h1`
  margin-bottom: 1rem;
`

const ImageWrapper = styled.div`
  margin-bottom: 1.5rem;
`

const Meta = styled.p`
  font-size: 0.9rem;
  color: #666;
`

const Body = styled.p`
  line-height: 1.7;
`


const MotherhoodPost = ({ data }) => {
    const { title, body, heroImage, category, author } =
        data.contentfulMotherhoodBlogPost

    return (
        <Layout>
            <Container>
                <Title>{title}</Title>

                {heroImage?.gatsbyImageData && (
                    <ImageWrapper>
                        <GatsbyImage
                            image={heroImage.gatsbyImageData}
                            alt={heroImage.title || title}
                        />
                    </ImageWrapper>
                )}

                <Meta>
                    <strong>Category:</strong> {category}
                </Meta>

                <Meta>
                    <strong>Author:</strong> {author}
                </Meta>

                <Body>{body?.body}</Body>

            </Container>
        </Layout>
    )
}

export default MotherhoodPost

export const Head = ({ data }) => (
    <Seo title={data.contentfulMotherhoodBlogPost.title} />
)

export const pageQuery = graphql`
  query motherhoodPostQuery($slug: String!) {
    contentfulMotherhoodBlogPost(slug: { eq: $slug }) {
      title
      slug
      category
      author
      body {
        body
      }
      heroImage {
        title
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          width: 700
        )
      }
    }
  }
`