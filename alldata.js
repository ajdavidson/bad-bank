function AllData() {
  const ctx = React.useContext(UserContext);
  //
  console.log(ctx.loggedIn[0].email)
  const res = ctx.xaction.filter(p => p.userID == ctx.loggedIn[0].email)

  console.log(res)
  return (
    <>
      <Card>
        <Card.Header><i className="fas fa-database"/> <b>All Data</b></Card.Header>
        <Card.Body>
          <Card.Title><h3><i className="far fa-user-circle"/> Profile</h3></Card.Title>
          <br/>
          {console.log(ctx.users)}

          {/* */}
          <h5><i className="fas fa-user"/> Account</h5>
          <Table striped hover>
            <thead>
              <tr>
                <th>Level</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>

              <tr className='c-user' style={{ fontWeight: 'bold' }}>
                <td>{ctx.loggedIn[0].level}</td>
                <td>{ctx.loggedIn[0].name}</td>
                <td>{ctx.loggedIn[0].email}</td>
                <td>{ctx.loggedIn[0].password}</td>
                <td>${ctx.loggedIn[0].balance}</td>
              </tr>

            </tbody>
          </Table>

          {/*  */}
          <br/>
          <h5><i className="fas fa-chart-bar"/> Transactions</h5>
          <Table striped hover>
            <thead>
              <tr>
                <th>User ID</th>
                <th>Type</th>
                <th>Date / Time</th>
                <th>Amount</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {res.map(t => (
                <tr>
                  <td>{t.userID}</td>
                  <td>{t.type}</td>
                  <td>{t.datetime}</td>
                  <td>${t.amount}</td>
                  <td>${t.balance}</td>
                </tr>
              )).reverse()}
            </tbody>
          </Table>

          {/* */}
          <br/>
          <h5><i className="fas fa-users"/> All Users</h5>
          <Table striped hover>
            <thead>
              <tr>
                <th>Level</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {ctx.users.map(t => (
                <tr>
                  <td>{t.level}</td>
                  <td>{t.name}</td>
                  <td>{t.email}</td>
                  <td>{t.password}</td>
                  <td>${t.balance}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

    </>
  );
}
