function Deposit() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [depositAmt, setDepositAmt] = React.useState(0);
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

    const newBalance = Number(ctx.users[0].balance) + Number(Math.trunc(depositAmt));
    var dtm = new Date();

    ctx.xaction.push({ userID: ctx.loggedIn[0].email, type: 'Deposit', datetime: dtm.toUTCString(), amount: Number(Math.trunc(depositAmt)), balance: newBalance });

    ctx.users[0].balance = newBalance;
    setShow(false);
  }

  function clearForm() {
    setDepositAmt(0);
    setShow(true);
  }

  return (
    <React.Fragment>
      <Card style={{ width: '400px' }}>
        <Card.Header><i class="fas fa-balance-scale-left"/> <b>Deposit</b></Card.Header>
        <Card.Body>
          <Card.Title>
            &nbsp;
            {status !== '' && <i class="fas fa-exclamation-triangle" style={{color: 'red'}}/>} {status}
          </Card.Title>
          <Card.Subtitle><br /><h5><i class="fas fa-balance-scale"/> Balance: ${JSON.stringify(ctx.users[0].balance)}</h5></Card.Subtitle>
          {show ? (
            <>
              <br />
              {/* <input type="input" className="form-control" id="depositAmt" placeholder="Enter deposit amount" value={depositAmt} onChange={e => setDepositAmt(e.currentTarget.value)} /><br /> */}
              <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <FormControl aria-label="Amount (to the nearest dollar)" id="depositAmt" placeholder="Enter a number greater than zero"  onChange={e => setDepositAmt(e.currentTarget.value)} />
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>
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
              <h5><i class="fas fa-check-circle" style={{color: 'green'}}/> Success</h5>
              {/* <button type="submit" className="btn btn-light" onClick={clearForm}>Make another Deposit</button> */}
              <Button type="submit" variant="outline-secondary" onClick={clearForm}>Make another Deposit</Button>
            </>
          )}
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}
