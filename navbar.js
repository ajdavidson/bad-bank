function NavBar() {
  var storedCTX = JSON.parse(localStorage.getItem("ctx_data"));

  console.log('From Local Storage:NavBar', {storedCTX});
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
    <Container style={{
      // marginBottom: '0',
      // paddingBottom: '0',
      // borderRadius: '0 0 20px 20px',
      //boxShadow: '3px 0px 3px 0px #000000'
    }}>


      <Navbar bg="light" variant="light" expand="lg"
              style={{
                marginBottom: '0',
                paddingBottom: '0',
                borderRadius: '0 0 20px 20px',
                boxShadow: 'inset 0px 1px 2px 1px #000000'
                // textShadow: '1px 1px 0px 0px #000000'
              }} sticky="top">

        <Navbar.Brand style={{paddingLeft: '15px'}}><i className="fas fa-globe" style={{color: "green"}}/> <b>Globalin
          Bank</b></Navbar.Brand>
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
          <Navbar.Brand style={{paddingBottom: '0'}}>
            {storedCTX !== null ? (
              <Dropdown as={ButtonGroup}>
                <Button variant="outline-*"><i className="fas fa-user-circle"/> {storedCTX.loggedIn[0].name}</Button>

                <Dropdown.Toggle split variant="outline" id="dropdown-split-basic"/>

                <Dropdown.Menu>
                  <Dropdown.Item><i className="fas fa-id-card"/> #{storedCTX.loggedIn[0].acctNum}</Dropdown.Item>
                  <Dropdown.Item><i className="fas fa-balance-scale"/> ${storedCTX.loggedIn[0].balance}</Dropdown.Item>
                  <Dropdown.Divider/>
                  <Dropdown.Header style={{color: 'green'}}>{storedCTX.loggedIn[0].email}</Dropdown.Header>
                  <Dropdown.Divider/>
                  <Dropdown.Item onClick={logOut}><i className="fas fa-sign-out-alt"/> Log Out</Dropdown.Item>
                  <Dropdown.Divider/>
                  <Dropdown.Header><i className="fas fa-exclamation-triangle" style={{color: 'red'}}/> Warning<br/>-
                    Clears All Data<br/>- Clears Local Storage<br/>- Resets Simulator</Dropdown.Header>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Dropdown as={ButtonGroup}>
                <Button variant="outline-*"><i className="fas fa-user-circle"/> Norman Osborn</Button>

                <Dropdown.Toggle split variant="outline" id="dropdown-split-basic"/>

                <Dropdown.Menu>
                  <Dropdown.Item><i className="fas fa-id-card"/> #990011001</Dropdown.Item>
                  <Dropdown.Item><i className="fas fa-balance-scale"/> $1337</Dropdown.Item>
                  <Dropdown.Divider/>
                  <Dropdown.Header style={{color: 'green'}}>norman.osborn@oscorp.io</Dropdown.Header>
                  <Dropdown.Divider/>
                  <Dropdown.Item onClick={logOut}><i className="fas fa-sign-out-alt"/> Log Out</Dropdown.Item>
                  <Dropdown.Divider/>
                  <Dropdown.Header><i className="fas fa-exclamation-triangle" style={{color: 'red'}}/> Warning<br/>-
                    Clears All Data<br/>- Clears Local Storage<br/>- Resets Simulator</Dropdown.Header>
                </Dropdown.Menu>
              </Dropdown>
            )}
          </Navbar.Brand>
        </Navbar.Collapse>

      </Navbar>
    </Container>
  );
}