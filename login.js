function Login() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
 // const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);

  // const res = ctx.users.filter(p => p.email == "richard.parker@oscorp.io")
  // console.log(res)
  //
  // if(res.length !== 0){
  //   alert("Value exists!")
  // } else{
  //   alert("Value does not exists!")
  // }

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
    const resPwd = ctx.users.filter(p => p.password== password)
    console.log(resPwd)


   // if (!validate(name, 'Enter a name')) return;
    if (!validate(email, 'Enter an email')) return;
    if (!validate(password, 'Enter a password')) return;
   //  if (password.length < 8) {
   //    setStatus('password needs 8 characters min');
   //    setTimeout(() => setStatus(''), 3000);
   //    return;
   //  }
    if(resEmail.length === 0){
     //alert("Value does not exists!")
      setStatus("No Email Match");
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    if(resPwd.length === 0){
      //alert("Value does not exists!")
      setStatus("No Password Match");
      setTimeout(() => setStatus(''), 3000);
      return;
    }
    //ctx.users.push({ level: 'Standard User', name, email, password, balance: 100 });
    ctx.loggedIn = resPwd
    setShow(false);
  }

  function clearForm() {
   // setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <React.Fragment>
      {/*<h5>Logged In {JSON.stringify(ctx.users)}</h5>*/}
      <Card style={{ width: '400px' }}>
        <Card.Header><i className="fas fa-user"/> <b>Log In</b></Card.Header>
        <Card.Body>
          <Card.Title>
            &nbsp;
            {status !== '' && <i class="fas fa-exclamation-triangle" style={{color: 'red'}}/>} {status}
          </Card.Title>
          {show ? (
            <>
              {/*  */}
              Email address<br />
              {/* <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br /> */}
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><i class="fas fa-envelope"/></InputGroup.Text>
                <FormControl
                  type="email" className="form-control" id="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.currentTarget.value)}
                />
              </InputGroup>
              {/*  */}
              Password<br />
              {/* <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br /> */}
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><i class="fas fa-key"/></InputGroup.Text>
                <FormControl
                  type="password" id="password" placeholder="Enter a password" value={password} onChange={e => setPassword(e.currentTarget.value)}
                />
              </InputGroup>

              {name !== '' || email !== '' || password !== '' ? (
                // <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
                <Button type="submit" variant="outline-secondary" onClick={handleCreate}>Log In</Button>
              ) : (
                <Button type="submit" variant="light" disabled>Fill in Form Info</Button>
              )}
            </>
          ) : (
            <>
              <h5><i className="fas fa-user-check"/> Logged In as {ctx.loggedIn[0].name}</h5>
              {/* <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button> */}
              <Button type="submit" variant="outline-secondary" onClick={clearForm}>Continue</Button>
            </>
          )}
        </Card.Body>
      </Card>
      <br/>
      <h5><i className="fas fa-user-shield"/> Logged In as: {ctx.loggedIn[0].name}</h5>
      <br/>
      <h5><i className="fas fa-users-cog"/> Test Users</h5>
      <Table striped hover style={{width:'400px'}}>
        <thead>
        <tr>
          <th>Email</th>
          <th>Password</th>
          <th>Level</th>
        </tr>
        </thead>
        <tbody>
        {ctx.users.slice(0, 3).map(t => (
          <tr>
            <td>{t.email}</td>
            <td>{t.password}</td>
            <td>{t.level}</td>
          </tr>
        ))}
        </tbody>
      </Table>
    </React.Fragment>
  )
}