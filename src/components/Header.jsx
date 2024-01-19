import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import { Link, Navigate, useLocation } from "react-router-dom";

const Header = (props) => {
  const { title } = props;
  const location  = useLocation();
  
  const headerStyle = {
    backgroundColor: "rgb(210 210 210)",
    color: "#333",
    maxWidth:"1531px",
    borderRadius: "5px",
    fontWeight: "bold",
    transition: "background-color 0.3s",
  };
 
  const navLinkStyle = {
    padding: "5px 21px",
    fontSize: "1.2rem",
    textDecoration: "none",
    color: "#333",
    transition: "color 0.3s",
  };
  
  const logoStyle = {
    fontSize: "1.6rem",
  };


  const onNavLinkHover = (e) => {
    e.target.style.color = "purple";
  };

  const onNavLinkLeave = (e) => {
    e.target.style.color = "#333";
  };

  return (
    <>
      <Row style={headerStyle}>
        <Col>
          <Navbar expand="sm" >
            <Container>
              <Navbar.Brand to="/" style={logoStyle}>
                  <img width="35rem" height="35rem" src="https://img.icons8.com/fluency/48/sticky-notes.png" alt="Logo" className="align-center" />
                  {title} 
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end ">
                <Nav>
                  <Link
                    className={(location.pathname==="/")?"text-decoration-underline":""}
                    to="/"
                    style={navLinkStyle}
                    onMouseOver={onNavLinkHover}
                    onMouseLeave={onNavLinkLeave}
                  >
                    Home
                  </Link  >
                  <Link
                    className={(location.pathname==="/about")?"text-decoration-underline":""}
                    to="/about"
                    style={navLinkStyle}
                    onMouseOver={onNavLinkHover}
                    onMouseLeave={onNavLinkLeave}
                  >
                    About
                  </Link>
                  {!localStorage.getItem("jwtToken") && <><Link
                    className={(location.pathname==="/login")?"btn btn-dark text-decoration-underline ms-2 mb-1":"btn btn-dark ms-2 mb-1"}
                    to="/login"
                    style={{color:"white"}}
                    onClick={Navigate("/login")}
                  >
                    Login
                  </Link>
                  <Link
                    className={(location.pathname==="/register")?"btn btn-dark text-decoration-underline ms-2 mb-1":"btn btn-dark ms-2 mb-1"}
                    to="/register"
                    style={{color:"white"}}
                    onClick={Navigate("/register")}
                  >
                    Register
                  </Link></>}
                  {localStorage.getItem("jwtToken") && <><Link
                    className="btn btn-dark mx-1 ms-3"
                    style={{color:"white"}}
                    onClick={()=>{localStorage.removeItem("jwtToken");window.location.reload();}}
                  >
                    Logout
                  </Link></>}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </>
  );
};

export default Header;