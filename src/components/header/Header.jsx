import { AppBar, Toolbar, styled, Button } from "@mui/material";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const Component = styled(AppBar)`
  background: #3d1951;
`;
const Links = styled(Link)`
  color: #fff;
  font-family: cursive;
  padding: 10px 20px;
  margin: 10px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a84ea8;
    border-radius: 5px;
  }
`;

const Container = styled(Toolbar)`
  display: flex;
  justify-content: center;
`;

const Header = () => {
  const navigate = useNavigate();

  const logout = async () => navigate("/account");

  return (
    <Component>
      <Container>
        <Links to="/">HOME</Links>
        <Links to="/about">ABOUT</Links>
        <Links to="/contact">CONTACT</Links>
        <Links to="/account">LOGOUT</Links>
      </Container>
    </Component>
  );
};

export default Header;
