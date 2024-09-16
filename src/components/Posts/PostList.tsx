import { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import { Post, fetchPosts } from '../../utils/api'
import styles from './PostList.module.scss'

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
    return <div className={styles.loader}>Loading...</div>
  }

  if (error) {
    return <div className={styles.error}>{error}</div>
  }

  return (
    <ul className={styles.postList}>
      {posts.map(post => (
        <li key={post.id}>
          <h2>{post.title.length}</h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  )
}
