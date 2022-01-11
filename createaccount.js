function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
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
    console.log(name, email, password);
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

    let acct = '9300' + (Math.floor(Math.random() * 90000) + 10000);
    console.log(acct)

    ctx.users.push({acctNum: acct, level: 'User', name, email, password, balance: 100});
    setShow(false);
  }

  function logInNow() {
    const resPwd = ctx.users.filter(p => p.password == password);
    console.log(resPwd);
    ctx.loggedIn = resPwd;
    //alert('Logged in as: ' + ctx.loggedIn[0].name);
    clearForm();
  }

  function clearForm() {
    setName('');
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
      <Card style={{width: '400px'}}>
        <Card.Header><i class="fas fa-id-card"/> <b>Create Account</b></Card.Header>
        <Card.Body>
          <Card.Title>
            &nbsp;
            {status !== '' && <i class="fas fa-exclamation-triangle" style={{color: 'red'}}/>} {status}
          </Card.Title>
          {ctx.loggedIn[0].level === 'Admin' ? (
            <>
              {show ? (
                <>
                  {/*  */}
                  Name<br/>
                  {/* <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br /> */}
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><i class="fas fa-user"/></InputGroup.Text>
                    <FormControl
                      type="input" className="form-control" id="name" placeholder="Enter your name" value={name}
                      onChange={e => setName(e.currentTarget.value)}
                    />
                  </InputGroup>
                  {/*  */}
                  Email address<br/>
                  {/* <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br /> */}
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><i class="fas fa-envelope"/></InputGroup.Text>
                    <FormControl
                      type="email" className="form-control" id="email" placeholder="Enter your email" value={email}
                      onChange={e => setEmail(e.currentTarget.value)}
                    />
                  </InputGroup>
                  {/*  */}
                  Password<br/>
                  {/* <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br /> */}
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><i class="fas fa-key"/></InputGroup.Text>
                    <FormControl
                      type={passwordShown ? "text" : "password"}
                      id="password" placeholder="Enter a password" value={password}
                      onChange={e => setPassword(e.currentTarget.value)}
                    />
                    <InputGroup.Text onClick={togglePassword} style={{width: '45px'}}>
                      {passwordShown ? (

                        <span><i className="fas fa-eye-slash"/></span>

                      ) : (

                        <span><i className="fas fa-eye"/></span>

                      )}
                    </InputGroup.Text>
                  </InputGroup>

                  {name !== '' || email !== '' || password !== '' ? (
                    // <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
                    <Button type="submit" variant="outline-secondary" onClick={handleCreate}>Create Account</Button>
                  ) : (
                    <Button type="submit" variant="light" disabled>Fill in Form Info</Button>
                  )}
                </>
              ) : (
                <>
                  <h5><i class="fas fa-check-circle" style={{color: 'green'}}/> Success</h5>
                  {/* <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button> */}
                  <Button type="submit" variant="outline-secondary" onClick={clearForm}>Add another account</Button>{'  '}
                  <Button type="submit" variant="outline-secondary" onClick={logInNow}>Log in?</Button>
                </>
              )}
            </>
          ) : (
            <>
              <h5><i className="fas fa-user-lock"/> Must be an Administrator</h5>
            </>
          )}
        </Card.Body>
      </Card>
      <br/>
      <h5><i className="fas fa-user-shield"/> Logged In as: {ctx.loggedIn[0].name}</h5>
    </React.Fragment>
  )
}