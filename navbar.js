const {
  Container,
  Button,
  Modal,
  Card,
  Image,
  ListGroup,
  ListGroupItem,
  InputGroup,
  FormControl,
  Row,
  Col,
  Spinner,
  Navbar,
  NavDropdown,
  Nav,
  OverlayTrigger,
  Tooltip,
  Table
} = ReactBootstrap;

function NavBar() {
  // const ctx = React.useContext(UserContext);
  // console.log(ctx.loggedIn[0].name)
  const navBuild =
    [
      {tip: 'Globalin Bank Online Application Welcome Page', link: '/', tab: 'Home'},
      {tip: 'Form to Create a new Account with Globalin Bank', link: 'CreateAccount', tab: 'Create Account'},
      {tip: 'Form to deposit money into your Account', link: 'deposit', tab: 'Deposit'},
      {tip: 'Form to Withdraw money from your Account', link: 'withdraw', tab: 'Withdraw'},
      {tip: 'View user data and history of transactions', link: 'alldata', tab: 'All Data'},
      {tip: 'Log In to an Account', link: 'login', tab: 'Login'},
    ]
  return (
    <>
      <Navbar bg="light" variant="light" expand="lg" style={{marginBottom: '0', paddingBottom: '0'}} sticky="top">
        <Container>
          <Navbar.Brand><i class="fas fa-globe" style={{color: "green"}}/> <b>Globalin Bank</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" fill variant="tabs" defaultActiveKey="#/">
              {navBuild.map(n =>(
              <OverlayTrigger
                placement='bottom'
                overlay={
                  <Tooltip>
                    {n.tip}
                  </Tooltip>
                }
              >
                <Nav.Link className="nav-links" href={'#' + n.link}>{n.tab}</Nav.Link>
              </OverlayTrigger>
              ) )}
              {/*/!* Home *!/*/}
              {/*<OverlayTrigger*/}
              {/*  placement='bottom'*/}
              {/*  overlay={*/}
              {/*    <Tooltip>*/}
              {/*      Globalin Bank Online Application Welcome Page*/}
              {/*    </Tooltip>*/}
              {/*  }*/}
              {/*>*/}
              {/*  <Nav.Link className="nav-links" href="#/">Home</Nav.Link>*/}
              {/*</OverlayTrigger>*/}
              {/*/!* Create Account *!/*/}
              {/*<OverlayTrigger*/}
              {/*  placement='bottom'*/}
              {/*  overlay={*/}
              {/*    <Tooltip>*/}
              {/*      Form to Create a new Account with Globalin Bank*/}
              {/*    </Tooltip>*/}
              {/*  }*/}
              {/*>*/}
              {/*  <Nav.Link href="#/CreateAccount/">Create Account</Nav.Link>*/}
              {/*</OverlayTrigger>*/}
              {/*/!* Deposit *!/*/}
              {/*<OverlayTrigger*/}
              {/*  placement='bottom'*/}
              {/*  overlay={*/}
              {/*    <Tooltip>*/}
              {/*      Form to deposit money into your Account*/}
              {/*    </Tooltip>*/}
              {/*  }*/}
              {/*>*/}
              {/*  <Nav.Link href="#/deposit/">Deposit</Nav.Link>*/}
              {/*</OverlayTrigger>*/}
              {/*/!* Withdraw *!/*/}
              {/*<OverlayTrigger*/}
              {/*  placement='bottom'*/}
              {/*  overlay={*/}
              {/*    <Tooltip>*/}
              {/*      Form to Withdraw money from your Account*/}
              {/*    </Tooltip>*/}
              {/*  }*/}
              {/*>*/}
              {/*  <Nav.Link href="#/withdraw/">Withdraw</Nav.Link>*/}
              {/*</OverlayTrigger>*/}
              {/*<OverlayTrigger*/}
              {/*  placement='bottom'*/}
              {/*  overlay={*/}
              {/*    <Tooltip>*/}
              {/*      View user data and history of transactions*/}
              {/*    </Tooltip>*/}
              {/*  }*/}
              {/*>*/}
              {/*  <Nav.Link href="#/alldata/">All Data</Nav.Link>*/}
              {/*</OverlayTrigger>*/}
              {/*<OverlayTrigger*/}
              {/*  placement='bottom'*/}
              {/*  overlay={*/}
              {/*    <Tooltip>*/}
              {/*      Log In to an Account*/}
              {/*    </Tooltip>*/}
              {/*  }*/}
              {/*>*/}
              {/*  <Nav.Link href="#/login/">Login</Nav.Link>*/}
              {/*</OverlayTrigger>*/}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}