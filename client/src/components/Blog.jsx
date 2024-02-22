import { useDispatch, useSelector } from 'react-redux'
import { deleteBlog, likeBlog } from '../reducers/blogsReducer'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { Button, Container, Table } from 'react-bootstrap'
import Comments from './Comments'
const Blog = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(state => state.user)
  const blogs = useSelector(state => state.blogs)
  const id = useParams().id

  const blog = blogs.find((blog) => blog.id === String(id))

  const handleLike = (blog) => {
    dispatch(likeBlog(blog))
  }

  const handleDelete = (blog) => {
    dispatch(deleteBlog(blog))
    navigate('/')
  }

  const toShowDelete = () => {
    if (user && user.username === blog.user.username) {
      return true
    }
    return false
  }

  if (!blog) {
    return <Navigate to="/"/>
  }

  return (
    <Container className='titleAuthorDiv'>
      <h2> {blog.title} </h2>
      <h5>by {blog.author}</h5>
      <p>link : <a target='_blank' href={blog.url} rel="noreferrer">{blog.url}</a> </p>
      <p>likes : {blog.likes}
        <Button variant='secondary' className='likeButton m-1 w-1 h-1' type="button" onClick={() => handleLike(blog)}>
          add like
        </Button>
      </p>
      <p>added by : <Link to={`/users/${blog.user.id}`}>{blog.user.name}</Link></p>
      <Button
        variant='danger'
        type="button"
        id='deleteBtn'
        style={{ display: toShowDelete() ? '' : 'none' }}
        onClick={() => handleDelete(blog)}
      >
          delete
      </Button>
      <Comments user={user} comments={blog.comments} />
    </Container>
  )
}

export default Blog
