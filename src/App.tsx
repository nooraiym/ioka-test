import { Pagination } from './Pagination'
import { PostList } from './PostList'

export const App = () => {
  return (
    <div>
      <h1>Posts</h1>
      <PostList />
      <Pagination />
    </div>
  )
}
