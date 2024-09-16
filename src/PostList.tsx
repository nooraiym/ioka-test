import { useEffect, useState } from 'react'
import { useAppContext } from './Context'
import { Post, fetchPosts } from './api'

export const PostList = () => {
  const { currentPage, limit } = useAppContext()
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadPosts = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const data = await fetchPosts(currentPage, limit)
        setPosts(data)
      } catch (error) {
        setError('Error fetching posts')
      } finally {
        setIsLoading(false)
      }
    }

    loadPosts()
  }, [currentPage])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  )
}
