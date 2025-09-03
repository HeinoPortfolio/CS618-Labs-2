// Create a post and save it to the database

import { Post } from '../db/models/post.js'

export async function createPost({ title, author, contents, tags }) {
  const post = new Post({ title, author, contents, tags })

  return await post.save()
}
