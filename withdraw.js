function Withdraw() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [withdrawAmt, setWithdrawAmt] = React.useState(0);
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (isNaN(field) || field < 1) {
      setStatus(label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    // if (field > ctx.users[0].balance) {
    //   setStatus('Amount exceeds balance');
    //   setTimeout(() => setStatus(''), 3000);
    //   return false;
    // }
    return true;
  }

  function handleCreate() {
    console.log(withdrawAmt);
    if (!validate(withdrawAmt, 'Enter a Number greater than Zero')) return;



    function find(arr) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].email === ctx.loggedIn[0].email) {
          return i;
        }
      }
    }

    const userID = find(ctx.users)
    console.log(userID);

    const newBalance = Number(ctx.users[userID].balance) - Number(Math.trunc(withdrawAmt));
    var dtm = new Date();

    if (withdrawAmt > ctx.users[userID].balance) {
      setStatus('Amount exceeds balance');
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    ctx.xaction.push({
      userID: ctx.loggedIn[0].email,
      type: 'Withdrawal',
      datetime: dtm.toUTCString(),
      amount: Number(Math.trunc(withdrawAmt)),
      balance: newBalance
    });
    ctx.users[userID].balance = newBalance;
    ctx.loggedIn[0].balance = newBalance;

    setShow(false);
  }

  function clearForm() {
    setWithdrawAmt(0);
    setShow(true);
  }

  return (
    <React.Fragment>
      <Card style={{width: '400px'}}>
        <Card.Header><i class="fas fa-balance-scale-right"/> <b>Withdraw</b></Card.Header>
        <Card.Body>
          <Card.Title>
            &nbsp;
            {status !== '' && <i class="fas fa-exclamation-triangle" style={{color: 'red'}}/>} {status}

          </Card.Title>
          <Card.Subtitle><br/><h5><i class="fas fa-balance-scale"/> Balance: ${JSON.stringify(ctx.loggedIn[0].balance)}
          </h5></Card.Subtitle>
          {show ? (
            <>
              <br/>
              {/* <input type="input" className="form-control" id="withdrawAmt" placeholder="Enter deposit amount" value={withdrawAmt} onChange={e => setWithdrawAmt(e.currentTarget.value)} /><br /> */}
              <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <FormControl aria-label="Amount (to the nearest dollar)" id="withdrawAmt"
                             placeholder="Enter a number greater than zero"
                             onChange={e => setWithdrawAmt(e.currentTarget.value)}/>
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>
              {/* Email address<br />
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br />
              Password<br />
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br /> */}

              {withdrawAmt !== 0 && withdrawAmt !== '' ? (
                // <button type="submit" className="btn btn-light" onClick={handleCreate}>Submit Withdrawal</button>
                <Button type="submit" variant="outline-secondary" onClick={handleCreate}>Submit Withdrawal</Button>
              ) : (
                <Button type="submit" variant="light" disabled>Fill in Amount</Button>
              )}
            </>
          ) : (
            <>
              <h5><i class="fas fa-check-circle" style={{color: 'green'}}/> Success</h5>
              {/* <button type="submit" className="btn btn-light" onClick={clearForm}>Make another Withdrawal</button> */}
              <Button type="submit" variant="outline-secondary" onClick={clearForm}>Make another Withdrawal</Button>
            </>
          )}
        </Card.Body>
      </Card>
      <br/>
      <h5><i className="fas fa-user-shield"/> Logged In as: {ctx.loggedIn[0].name}</h5>
    </React.Fragment>
  )
}

