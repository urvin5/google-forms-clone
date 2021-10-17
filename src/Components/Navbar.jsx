import { Link } from "react-router-dom";
import { Button, Container, Dropdown, Menu } from "semantic-ui-react";
export function Navbar() {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Link to="/">
          <Menu.Item as="a" header>
            Forms
          </Menu.Item>
        </Link>
        <Menu.Menu position="right">
          <Menu.Item>
            <Link to="/create">Create Form</Link>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
}
