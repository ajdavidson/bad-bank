function AllData() {
  const ctx = React.useContext(UserContext);
  return (
    <>
      <Card>
        <Card.Header><i class="fas fa-database"></i> <b>All Data</b></Card.Header>
        <Card.Body>
          <Card.Title><h3><i class="far fa-user-circle"></i> Profile</h3></Card.Title>
          <br></br>
          {console.log(ctx.users)}
          <h5>Curennt User</h5>
          <table id="books" class="display table table-striped" style={{ width: "100%" }}>
            {/*<caption>Result Table for Keyword: {query} </caption>*/}

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

              <tr>
                <td>{ctx.users[0].level}</td>
                <td>{ctx.users[0].name}</td>
                <td>{ctx.users[0].email}</td>
                <td>{ctx.users[0].password}</td>
                <td>{ctx.users[0].balance}</td>
              </tr>

            </tbody>
          </table>
          {/*  */}
          <h5>Transactions</h5>
          <table id="books" class="display table table-striped" style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>User ID</th>
                <th>Type</th>
                <th>Date/Time</th>
                <th>Amount</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {ctx.xaction.map(t => (
                <tr>
                  <td>{t.userID}</td>
                  <td>{t.type}</td>
                  <td>{t.datetime}</td>
                  <td>{t.amount}</td>
                  <td>{t.balance}</td>
                </tr>
              )).reverse()}
            </tbody>
          </table>
          <h5>All Users</h5>
          <table id="books" class="display table table-striped" style={{ width: "100%" }}>
            {/*<caption>Result Table for Keyword: {query} </caption>*/}

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
                  <td>{t.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card.Body>
      </Card>

    </>
  );
}
