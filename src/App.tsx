import { Pagination } from "./components/Pagination/Pagination"
import { PostList } from "./components/Posts/PostList"

export const App = () => {
  return (
    <div>
      <h1>Posts</h1>
      <PostList />
      <Pagination />
    </div>
  )
}
