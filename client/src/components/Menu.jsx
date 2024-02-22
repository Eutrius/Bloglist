import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../reducers/userReducer'
import { Navbar, Nav, Button } from 'react-bootstrap'

const Menu = () => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <Navbar className="mb-3 ps-5 pe-5" collapseOnSelect expand="lg" variant="dark" bg="dark">
      <Navbar.Brand as="span">Eutrius Bloglist</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto d-inline-flex align-items-center w-100">
          <Nav.Link href="/"> Blogs </Nav.Link>
          <Nav.Link href="/users"> Users </Nav.Link>
          {user
            ? <Nav.Link className="ms-auto" as="span">{user.name} logged in <Button onClick={handleLogout} variant="secondary">Logout</Button></Nav.Link>
            : <Nav.Link href="/login"> Login </Nav.Link>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Menu
