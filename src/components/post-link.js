import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div>
    <p>{post.frontmatter.title}</p>
    <p>{post.frontmatter.date}</p>
    <Link to={post.frontmatter.path}></Link>
  </div>
)

export default PostLink
