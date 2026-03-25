import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PostPreview = ({ post }) => {
    const image = getImage(post.heroImage)

    return (
        <li style={{ listStyle: "none", marginBottom: "2rem" }}>
            <Link to={`/${post.slug}`} style={{ textDecoration: "none" }}>
                <h2>{post.title}</h2>
            </Link>

            {image && (
                <div style={{ marginBottom: "1rem", maxWidth: "300px" }}>
                    <GatsbyImage
                        image={image}
                        alt={post.heroImage?.title || post.title}
                    />
                </div>
            )}

            <p>{post.description?.description}</p>
            <p>
                <strong>Category:</strong> {post.category}
            </p>
            <p>
                <strong>Author:</strong> {post.author}
            </p>

            <Link to={`/${post.slug}`}>Read More →</Link>
        </li>
    )
}

export default PostPreview