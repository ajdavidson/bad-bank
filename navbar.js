function NavBar() {
  var storedCTX = JSON.parse(localStorage.getItem("ctx_data"));

  console.log('From Local Storage', {storedCTX});
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

  function logOut() {
    localStorage.clear();
    window.location.reload(true);
  }

  return (
    <>
      <Navbar bg="light" variant="light" expand="lg" style={{marginBottom: '0', paddingBottom: '0'}} sticky="top">
        <Container>
          <Navbar.Brand><i className="fas fa-globe" style={{color: "green"}}/> <b>Globalin Bank</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" fill variant="tabs" defaultActiveKey="#/">
              {/*Build NAVBAR */}
              {navBuild.map((n, index) => (
                <OverlayTrigger
                  key={index}
                  placement='bottom'
                  overlay={
                    <Tooltip>
                      {n.tip}
                    </Tooltip>
                  }
                >
                  <Nav.Link key={index} className="nav-links" href={'#' + n.link}>{n.tab}</Nav.Link>
                </OverlayTrigger>
              ))}
            </Nav>
            {storedCTX !== null ? (
              // <Dropdown style={{position: 'absolute', top: '15px', right: '10px'}}>
              //   <Dropdown.Toggle variant="outline-*" id="dropdown-basic">
              //     <h5><i className="fas fa-user-circle"/> {storedCTX.loggedIn[0].name}</h5>
              //   </Dropdown.Toggle>
              //
              //   <Dropdown.Menu>
              //     <Dropdown.Item href="#">Log Out</Dropdown.Item>
              //     {/*<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>*/}
              //     {/*<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
              //   </Dropdown.Menu>
              // </Dropdown>
              <Dropdown as={ButtonGroup} style={{position: 'absolute', top: '10px', right: '10px'}}>
                <Button variant="outline-*"><i className="fas fa-user-circle"/> {storedCTX.loggedIn[0].name}</Button>

                <Dropdown.Toggle split variant="outline" id="dropdown-split-basic"/>

                <Dropdown.Menu>
                  <Dropdown.Header>Clears All Data<br/>Clears Local Storage<br/>Resets Simulator</Dropdown.Header>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={logOut}>Log Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              // <div style={{position: 'absolute', top: '15px', right: '10px'}}><h5><i className="fas fa-user-circle"/> {storedCTX.loggedIn[0].name}</h5></div>

            ) : (
              <Dropdown as={ButtonGroup} style={{position: 'absolute', top: '10px', right: '10px'}}>
                <Button variant="outline-*"><i className="fas fa-user-circle"/> Norman Osborn</Button>

                <Dropdown.Toggle split variant="outline" id="dropdown-split-basic"/>

                <Dropdown.Menu>
                  <Dropdown.Header>Clears All Data<br/>Clears Local Storage<br/>Resets Simulator</Dropdown.Header>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={logOut}>Log Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}