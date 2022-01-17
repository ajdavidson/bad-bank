function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [level, setLevel] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);

  const [passwordShown, setPasswordShown] = React.useState(false);

  function validate(field, label) {
    if (!field) {
      setStatus(label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    //console.log(name, email, password);
    console.log(level)

// if(!level) {
//   setStatus("Choose a User Level");
//   return;
// }
    if (!validate(level, 'Choose a User Level')) return;
    if (!validate(name, 'Enter a name')) return;

    if (!validate(email, 'Enter an email')) return;

    const resEmail = ctx.users.filter(p => p.email == email)
    console.log(resEmail)
    if (resEmail.length !== 0) {
      setStatus("Email already in use");
      setTimeout(() => setStatus(''), 3000);
      return;
    }

    if (!validate(password, 'Enter a password')) return;
    if (password.length < 8) {
      setStatus('Password needs 8 characters min');
      setTimeout(() => setStatus(''), 3000);
      return;
    }

    let acct = '9900' + (Math.floor(Math.random() * 90000) + 10000);
    console.log('New Account ',acct,' created' )

    ctx.users.push({acctNum: acct, level: level, name, email, password, balance: 100});
    localStorage.setItem("ctx_data", JSON.stringify(ctx));
    setShow(false);
  }

  // function logInNow() {
  //   const resPwd = ctx.users.filter(p => p.password == password);
  //   console.log(resPwd);
  //   ctx.loggedIn = resPwd;
  //   localStorage.setItem("ctx_data", JSON.stringify(ctx));
  //   //alert('Logged in as: ' + ctx.loggedIn[0].name);
  //   clearForm();
  //   window.location.reload(true);
  // }

  function clearForm() {
    setName('');
    setEmail('');
    setPassword('');
    setLevel('');
    setShow(true);
  }

  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  // function getSelectedValue(event) {
  //   console.log("Value: " + event.target.value + "; Display: " + event.target[event.target.selectedIndex].text + ".");
  //   setLevel(event.target[event.target.selectedIndex].text);
  //   console.log(level);
  // }

  return (
    <React.Fragment>
      <Container fluid={'lg'}>
        <Row sm={12} md={12} lg={4}>
          <Col sm={12} md={12} lg={4}>
            <Card style={{width: '100%', borderRadius: '5px 45px 45px 5px'}}>
              <Card.Header style={{borderRadius: '5px 45px 5px 45px', textAlign: 'center'}}><i
                className="fas fa-id-card"/> <b>Create Account</b></Card.Header>
              <Card.Body>
                <Card.Title>
                  &nbsp;
                  {status !== '' && <i className="fas fa-exclamation-triangle" style={{color: 'red'}}/>} {status}
                </Card.Title>
                {ctx.loggedIn[0].level === 'Administrator' ? (
                  <>
                    {show ? (
                      <>
                        <Form style={{textAlign: 'center'}} onSubmit={e => e.preventDefault()}>

                          <Form.Label htmlFor="inputName">User Type</Form.Label>
                          <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1"><i className="fas fa-shield-alt"/></InputGroup.Text>
                            <Form.Select
                              aria-label="Default select example"
                              // onChange={event => setLevel(event.target[event.target.selectedIndex].text)}
                              onChange={e => setLevel(e.currentTarget.value)}
                            >
                              <option value={""}>Select Level</option>
                              <option value="Individual">Individual</option>
                              <option value="Manager">Manager</option>
                              <option value="Administrator">Administrator</option>
                            </Form.Select>
                          </InputGroup>

                          {/*  */}
                          <Form.Label htmlFor="inputName">Name</Form.Label>
                          {/* <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br /> */}
                          <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1"><i className="fas fa-user"/></InputGroup.Text>
                            <FormControl
                              type="input" className="form-control" id="name" placeholder="Enter your name" value={name}
                              onChange={e => setName(e.currentTarget.value)}

                            />
                          </InputGroup>
                          {/*  */}
                          <Form.Label htmlFor="inputEmail">Email</Form.Label>
                          {/* <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br /> */}
                          <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1"><i className="fas fa-envelope"/></InputGroup.Text>
                            <FormControl
                              type="input" className="form-control" id="email" placeholder="Enter your email"
                              value={email}
                              onChange={e => setEmail(e.currentTarget.value)}

                            />
                          </InputGroup>
                          {/*  */}
                          <Form.Label htmlFor="inputPWD">Password</Form.Label>
                          {/* <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br /> */}
                          <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1"><i className="fas fa-key"/></InputGroup.Text>
                            <FormControl
                              type={passwordShown ? "text" : "password"}
                              id="password" placeholder="Enter a password" value={password}
                              onChange={e => setPassword(e.currentTarget.value)}

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
                            <Button type="submit" variant="outline-secondary" onClick={handleCreate}>Create
                              Account</Button>
                          ) : (
                            <Button type="submit" variant="light" disabled>Fill in Form Info</Button>
                          )}
                        </Form></>
                    ) : (
                      <>
                        <Form style={{textAlign: 'center'}} onSubmit={e => e.preventDefault()}>
                          <Form.Text htmlFor="inputEmail">
                            <h5><i className="fas fa-check-circle"
                                   style={{color: 'green'}}/> Success</h5></Form.Text>
                          {/* <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button> */}
                          <Button type="submit" variant="outline-secondary" onClick={clearForm}>Add another
                            account</Button>{'  '}
                          {/*<Button type="submit" variant="outline-secondary" onClick={logInNow}>Log in?</Button>*/}
                        </Form></>
                    )}
                  </>

                ) : (
                  <>
                    <h5><i className="fas fa-user-lock"/> Must be an Administrator</h5>
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

      </Container>
    </React.Fragment>
  )
}