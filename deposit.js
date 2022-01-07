function Deposit() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [depositAmt, setDepositAmt] = React.useState(0);
  //const [name, setName] = React.useState('');
  //const [email, setEmail] = React.useState('');
  //const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (isNaN(field) || field < 1) {
      setStatus(label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    console.log(depositAmt);
    if (!validate(depositAmt, 'Enter a Number greater than Zero')) return;
    // if (!validate(email, 'Enter an email')) return;
    // if (!validate(password, 'Enter a password')) return;
    // if (password.length < 8) {
    //   setStatus('Error: password needs 8 characters min');
    //   setTimeout(() => setStatus(''), 5000);
    //   return;
    // }

    //ctx.users.push({ name, email, password, balance: 100 });

    ctx.users[0].balance = Number(ctx.users[0].balance) + Number(Math.trunc(depositAmt));
    setShow(false);
  }

  function clearForm() {
    //setName('');
    //setEmail('');
    //setPassword('');
    setDepositAmt(0);
    setShow(true);
  }

  return (
    <React.Fragment>
      <Card style={{ width: '400px' }}>
        <Card.Header><b>Deposit</b></Card.Header>
        <Card.Body>
          <Card.Title>
            &nbsp;
            {status !== '' && <i class="fas fa-exclamation-triangle" style={{ color: 'red' }}></i>} {status}
          </Card.Title>
          <Card.Subtitle>Current Balance: ${JSON.stringify(ctx.users[0].balance)}</Card.Subtitle>
          {show ? (
            <>
              $<br />
              <input type="input" className="form-control" id="depositAmt" placeholder="Enter deposit amount" value={depositAmt} onChange={e => setDepositAmt(e.currentTarget.value)} /><br />
              {/* Email address<br />
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br />
              Password<br />
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br /> */}

              {depositAmt !== 0 && depositAmt !== '' ? (
                // <button type="submit" className="btn btn-light" onClick={handleCreate}>Submit Deposit</button>
                <Button type="submit" variant="outline-secondary" onClick={handleCreate}>Submit Deposit</Button>
              ) : (
                // <button type="submit" className="btn btn-warning" disabled>Fill in Amount</button>
                <Button type="submit" variant="light" disabled>Fill in Amount</Button>
              )}
            </>
          ) : (
            <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make another Deposit</button>
            </>
          )}
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}
