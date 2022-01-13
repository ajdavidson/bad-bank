function Login() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);

  const [passwordShown, setPasswordShown] = React.useState(false);

  //
  function validate(field, label) {
    if (!field) {
      setStatus(label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    console.log(email, password);

    //
    const resEmail = ctx.users.filter(p => p.email == email)
    console.log(resEmail)
    const resPwd = ctx.users.filter(p => p.password == password)
    console.log(resPwd)


    // if (!validate(name, 'Enter a name')) return;
    if (!validate(email, 'Enter an email')) return;
    if (!validate(password, 'Enter a password')) return;
    //  if (password.length < 8) {
    //    setStatus('password needs 8 characters min');
    //    setTimeout(() => setStatus(''), 3000);
    //    return;
    //  }
    if (resEmail.length === 0) {
      //alert("Value does not exists!")
      setStatus("No Email Match");
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    if (resPwd.length === 0) {
      //alert("Value does not exists!")
      setStatus("No Password Match");
      setTimeout(() => setStatus(''), 3000);
      return;
    }
    //ctx.users.push({ level: 'Standard User', name, email, password, balance: 100 });
    var storedCTX = JSON.parse(localStorage.getItem("ctx_data"));
    console.log('From Local Storage', {storedCTX});
    //console.log('Log Out ', storedCTX.loggedIn[0].name)
    //console.log('Last Log In ', resEmail[0].name)
    ctx.loggedIn = resPwd
    localStorage.setItem("ctx_data", JSON.stringify(ctx));
    setTimeout(() => window.location.reload(true), 3000);
    //window.location.reload(true);
    //window.location.href = '#home';
    setShow(false);
  }

  function clearForm() {
    // setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };


  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col md={4}>
            {/*<h5>Logged In {JSON.stringify(ctx.users)}</h5>*/}
            <Card style={{width: '400px',marginBottom:'10px'}}>
              <Card.Header><i className="fas fa-user"/> <b>Log In</b></Card.Header>
              <Card.Body>
                <Card.Title>
                  &nbsp;
                  {status !== '' && <i className="fas fa-exclamation-triangle" style={{color: 'red'}}/>} {status}
                </Card.Title>
                {show ? (
                  <>
                    <Form>
                    {/*  */}
                    Email address<br/>
                    {/* <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br /> */}
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1"><i className="fas fa-envelope"/></InputGroup.Text>
                      <FormControl
                        type="email" className="form-control" id="email" placeholder="Enter your email" value={email}
                        onChange={e => setEmail(e.currentTarget.value)}
                        autoComplete="current-password"
                      />
                    </InputGroup>
                    {/*  */}
                    Password<br/>
                    {/* <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br /> */}
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1"><i className="fas fa-key"/></InputGroup.Text>
                      <FormControl
                        type={passwordShown ? "text" : "password"}
                        id="password" placeholder="Enter a password" value={password}
                        onChange={e => setPassword(e.currentTarget.value)}
                        autoComplete="current-password"
                      />
                      <InputGroup.Text onClick={togglePassword} style={{width: '45px', cursor: 'pointer'}}>
                        {passwordShown ? (

                          <span><i className="fas fa-eye-slash"/></span>

                        ) : (

                          <span><i className="fas fa-eye"/></span>

                        )}
                      </InputGroup.Text>

                    </InputGroup>

                    {name !== '' || email !== '' || password !== '' ? (
                      // <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
                      <Button type="submit" variant="outline-secondary" onClick={handleCreate}>Log In</Button>
                    ) : (
                      <Button type="submit" variant="light" disabled>Fill in Form Info</Button>
                    )}
                  </Form></>
                ) : (
                  <>

                    <h5><Spinner animation="border" /> Logging in as {ctx.loggedIn[0].name}...</h5>
                    {/* <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button> */}
                    {/*<Button type="submit" variant="outline-secondary" onClick={clearForm}>Continue</Button>*/}
                  </>
                )}
              </Card.Body>
            </Card>

          </Col>
          {/*<Col md={8} style={{position:'relative'}}>*/}
          {/*  <br/>*/}
          {/*  <div style={{position:'absolute', top:'0',right:'0'}}><h5><i className="fas fa-user-circle"/> {ctx.loggedIn[0].name}</h5></div>*/}
          {/*</Col>*/}
        </Row>
        <Row>
        <Col md={8} style={{position:'relative'}}>
          <h5><i className="fas fa-users-cog"/> Test Users</h5>
          <Table striped hover style={{width: '500px',marginTop:'10px'}}>
            <thead>
            <tr>
              <th>Level</th>
              <th>Email</th>
              <th>Password</th>
              <th style={{textAlign: 'center'}}><i className="fas fa-copy"/></th>
            </tr>
            </thead>
            <tbody>
            {ctx.users.slice(0, 4).map((t, index) => (
              <tr style={{cursor: 'copy'}}
                  key={index}
                  onClick={() => {
                    setEmail(t.email);
                    setPassword(t.password)
                  }}>
                <td>{t.level}</td>
                <td>{t.email}</td>
                <td>{t.password}</td>
                <td style={{textAlign: 'center'}}>
                  <OverlayTrigger

                    placement='right'
                    overlay={
                      <Tooltip>
                        Click to fill in form <br/>with this users info<br/>{t.email} <br/> {t.password}
                      </Tooltip>
                    }
                  >
                    <Link key={index} style={{cursor: 'copy'}}
                            onClick={() => {
                              setEmail(t.email);
                              setPassword(t.password)
                            }}><i
                      className="fas fa-copy"/></Link>
                  </OverlayTrigger>
                </td>

              </tr>
            ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      </Container>



    </React.Fragment>
  )
}