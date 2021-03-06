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
    let pattern = /^\d+$/;
    let result = pattern.test(field);

    if (!result){
      //alert('not a valid number')
      setStatus('Invalid type of Number');
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


    if (withdrawAmt > ctx.users[userID].balance) {
      setStatus('Amount exceeds balance');
      setTimeout(() => setStatus(''), 3000);
      return false;
    }

    const newBalance = Number(ctx.users[userID].balance) - Number(Math.trunc(withdrawAmt));
    //
    var d = new Date();

    var hours = d.getUTCHours();
    var min = d.getUTCMinutes(); //
    var sec = d.getUTCSeconds();


    var date = d.getUTCDate();
    var month = d.getUTCMonth() + 1; // Since getUTCMonth() returns month from 0-11 not 1-12
    var year = d.getUTCFullYear();

    var dateStr = month + "/" + date + "/" + year;
    //console.log(dateStr)
    var timeStr = hours + ":" + min + ":" + sec;
    //console.log(timeStr)

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var day = days[d.getDay()];
    //console.log(day)
    var strDay = day.substring(0, 3);
    //console.log(strDay)


    var month = months[d.getMonth()];
    //console.log(month)

    //const setXDate = strDay + ', ' + dateStr + ' ' + timeStr;
    const setXDate = strDay + ', ' + d.toLocaleString('en-US', { timeZone: 'UTC' })
    console.log('Withdrawal Timestamp: ',setXDate)

    // console.log(d.toLocaleString('en-US', { timeZone: 'UTC' }));
    // console.log(strDay,',', d.toLocaleString('en-US', { timeZone: 'UTC' }));
    //



    ctx.xaction.push({
      userID: ctx.loggedIn[0].email,
      type: 'Withdrawal',
      datetime: setXDate,
      amount: Number(Math.trunc(withdrawAmt)),
      balance: newBalance
    });
    ctx.users[userID].balance = newBalance;
    ctx.loggedIn[0].balance = newBalance;
    localStorage.setItem("ctx_data", JSON.stringify(ctx));
    setShow(false);
  }

  function clearForm() {
    setWithdrawAmt(0);
    setShow(true);
  }

  return (
    <React.Fragment>
      <Container fluid={'lg'} >
        <Row sm={12} md={12} lg={4}>
          <Col sm={12} md={12} lg={4}>
            <Card style={{width: '100%', borderRadius: '5px 45px 45px 5px'}}>
              <Card.Header style={{borderRadius: '5px 45px 5px 45px',textAlign:'center'}}><i className="fas fa-balance-scale-right"/> <b>Withdraw</b></Card.Header>
              <Card.Body>
                <Card.Title>
                  <h5><i className="fas fa-balance-scale"/> Balance:
                    ${JSON.stringify(ctx.loggedIn[0].balance)}</h5>
                </Card.Title>
                <Card.Subtitle><br/>
                  &nbsp;
                  {status !== '' && <i className="fas fa-exclamation-triangle" style={{color: 'red'}}/>} {status}
                </Card.Subtitle>

                {show ? (
                  <>
                  <Form style={{textAlign: 'center'}} onSubmit={e => e.preventDefault()}>
                    <br/>
                    <Form.Label>Amount</Form.Label>
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
                      <Button type="submit" variant="outline-secondary" onClick={handleCreate}>Submit
                        Withdrawal</Button>
                    ) : (
                      <Button type="submit" variant="light" disabled>Fill in Amount</Button>
                    )}
                  </Form></>
                ) : (
                  <>
                    <h5><i className="fas fa-check-circle" style={{color: 'green'}}/> Success</h5>
                    {/* <button type="submit" className="btn btn-light" onClick={clearForm}>Make another Withdrawal</button> */}
                    <Button type="submit" variant="outline-secondary" onClick={clearForm}>Make another
                      Withdrawal</Button>
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

