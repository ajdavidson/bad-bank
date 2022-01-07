function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''), 5000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, 'Enter a name')) return;
    if (!validate(email, 'Enter an email')) return;
    if (!validate(password, 'Enter a password')) return;
    if (password.length < 8) {
      setStatus('Error: password needs 8 characters min');
      setTimeout(() => setStatus(''), 5000);
      return;
    }
    ctx.users.push({ name, email, password, balance: 100 });
    setShow(false);
  }

  function clearForm() {
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <React.Fragment>
      <Card style={{ width: '400px' }}>
        <Card.Header>Create Account</Card.Header>
        <Card.Body>
          <Card.Title>&nbsp;{status}</Card.Title>
          {show ? (
            <>
              Name<br />
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br />
              Email address<br />
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br />
              Password<br />
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br />

              {name !== '' || email !== '' || password !== '' ? (
                <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
              ) : (
                <button type="submit" className="btn btn-warning" disabled>Fill in Form Info</button>
              )}
            </>
          ) : (
            <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
            </>
          )}
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}