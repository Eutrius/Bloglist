import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link, Navigate, useParams } from 'react-router-dom'

const User = () => {
  const id = useParams().id
  const users = useSelector(state => state.users)
  const user = users.find((user) => user.id === String(id))


  if (!user) {
    return <Navigate to="/"/>
  }
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th><h2>{user.name}</h2></th>
          </tr>
        </thead>
        <tbody>
          {user.blogs.map((blog) => (
            <tr key={blog.id}>
              <td>
                <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
              </td>
            </tr>
          )
          )}

        </tbody>
      </Table>
    </div>
  )
}

export default User
