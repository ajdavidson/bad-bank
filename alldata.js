function AllData() {
  const ctx = React.useContext(UserContext);
  return (
    <>
      <Card>
        <Card.Header><b>All Data</b></Card.Header>
        <Card.Body>
          <Card.Title>Users</Card.Title>
          {/* <h5>All Data in Store</h5>
      {JSON.stringify(ctx)}<br /> */}
          {console.log(ctx.users)}
          <table id="books" class="display table table-striped" style={{ width: "100%" }}>
            {/*<caption>Result Table for Keyword: {query} </caption>*/}
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Balance</th>
                {/* <th>Year</th>
          <th>Price</th> */}
              </tr>
            </thead>
            <tbody>
              {ctx.users.map(t => (
                <tr>
                  {/* <td width={'100px'}>
              <Button variant="outline-*"
                      x={t.titleweb}
                      onClick={() => {
                        handleShow(t.titleweb, t['@uri'], t.authorweb, t.formatname, t.pages, t.authorbio, t.flapcopy, t.isbn, t.onsaledate, t.priceusa);
                        console.log('Zoom...');
                      }
                      }><i class="fas fa-search-plus" style={{color: 'FF6600'}}></i>
              </Button>
            </td> */}
                  {/* <td><img height="55px" src={t['@uri']} /></td> */}
                  <td>{t.name}</td>
                  <td>{t.email}</td>
                  <td>{t.password}</td>
                  <td>{t.balance}</td>
                  {/* <td>{t.onsaledate.substring(t.onsaledate.length - 4)}</td>
            <td>${t.priceusa}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </Card.Body>
      </Card>

    </>
  );
}
