import { useContext } from "react";
import { NavItem, Navbar, NavLink } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../src/context/index";
import { LeftNavContainer } from "./Nav-style";

const Nav = () => {
  const [state, setState] = useContext(UserContext);
  const navigate = useNavigate();
  console.log(state, "nav");

  const handleLogOut = () => {
    setState({
      data: null,
      error: null,
      loading: false,
    });
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <Navbar style={{ marginBottom: "-0rem", fontWeight: "500" }}>
      {/* <IconSection>
        <Figure>
          <Figure.Image
            margin-top={20}
            width={50}
            height={50}
            src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/WPVG_icon_2016.svg/1024px-WPVG_icon_2016.svg.png"
          />
        </Figure>
      </IconSection> */}

      <NavItem>
        <NavLink>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </NavLink>
      </NavItem>
      <NavItem
        style={{
          position: "relative",
          left: "40%",
          fontWeight: "bold",
        }}
      >
        <h1 style={{ fontFamily: "Dancing Script" }}>SubBlog</h1>
      </NavItem>
      {state.data && (
        <LeftNavContainer>
          <NavItem
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <NavLink onClick={handleLogOut}>Logout</NavLink>
          </NavItem>
        </LeftNavContainer>
      )}

      {/* {localStorage.getItem("token") && (
        <NavItem>
          <NavLink className="op" style={{ fontWeight: "500" }}>
            <Link to="/plans" className="nav-link">
              Logout
            </Link>
          </NavLink>
        </NavItem>
      )} */}
    </Navbar>
  );
};

export default Nav;
