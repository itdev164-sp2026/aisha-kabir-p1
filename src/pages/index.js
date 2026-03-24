import * as React from "react"
import { graphql, Link } from "gatsby"

const IndexPage = ({ data }) => {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>My Motherhood Blog</h1>

      <ul>
        {data.allContentfulMotherhoodBlogPost.edges.map(({ node }) => (
          <li key={node.slug} style={{ marginBottom: "1.5rem" }}>
            {node.heroImage?.file?.url && (
              <img
                src={node.heroImage.file.url}
                alt={node.heroImage.title || node.title}
                style={{ width: "300px", marginBottom: "1rem" }}
              />
            )}
            
            <h2>{node.title}</h2>
            <p>{node.description?.description}</p>
            <p><strong>Category:</strong> {node.category}</p>
            <p><strong>Author:</strong> {node.author}</p>
            <Link to={`/${node.slug}`}>Read More →</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage

export const query = graphql`
{
  allContentfulMotherhoodBlogPost {
    edges {
      node {
        title
        slug
        description {
          description
        }
        category
        author
        heroImage {
          file {
            url
          }
          title
        }
      }
    }
  }
}
`