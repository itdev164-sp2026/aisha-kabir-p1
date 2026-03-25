import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = ({ data }) => (
  <Layout>
    <h1 className={styles.textCenter}>Blooming Through Motherhood</h1>
    <p className={`${styles.textCenter} ${styles.intro}`}>
      A space for reflections, encouragement, and stories about the beauty,
      challenges, and growth that come with motherhood.
    </p>

    <ul className={styles.list}>
      {data.allContentfulMotherhoodBlogPost.edges.map(({ node }) => (
        <li key={node.slug} className={styles.listItem}>
          <Link to={`/${node.slug}`} className={styles.listItemLink}>
            {node.title}
          </Link>
          

          {node.heroImage?.gatsbyImageData && (
            <div>
              <GatsbyImage
                image={node.heroImage.gatsbyImageData}
                alt={node.heroImage.title || node.title}
              />
            </div>
          )}

          <p className={styles.listItemDescription}>
            {node.description?.description}
          </p>

          <Link to={`/${node.slug}`}>Read More →</Link>

          <p>
            <strong>Category:</strong> {node.category}
          </p>

          <p>
            <strong>Author:</strong> {node.author}
          </p>
        </li>
      ))}
    </ul>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  {
    allContentfulMotherhoodBlogPost {
      edges {
        node {
          title
          slug
          category
          author
          description {
            description
          }
          heroImage {
            title
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              width: 300
            )
          }
        }
      }
    }
  }
`