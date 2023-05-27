import React from 'react'

export function Post({post, key}) {
  return (
        <div>
                <ul>
                        <li key={key}>{post.title}</li>
                </ul>
        </div>
  )
}

export default Post