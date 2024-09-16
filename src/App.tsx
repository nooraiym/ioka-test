import './styles/global.scss'
import { Pagination } from "./components/Pagination/Pagination"
import { PostList } from "./components/Posts/PostList"

export const App = () => {
  return (
    <div className='container'>
      <h1>Posts</h1>
      <PostList />
      <Pagination />
    </div>
  )
}
