
function Home() {
  const ctx = React.useContext(UserContext);
  return (
    <React.Fragment>
      <Card style={{ width: '400px' }}>
        <Card.Header><i class="fas fa-globe"/> <b>Globalin Bank Online Application</b></Card.Header>
        <Card.Body style={{textAlign:'center'}}>
          <Card.Title>Hello, {ctx.users[0].name} {ctx.users[0].level === 'Admin' && '( Admin )'}</Card.Title>
          {/* <img src="bank.png" className="img-fluid" alt="Responsive image" /> */}
          <div style={{ fontSize: '38px' }}><i class="fas fa-globe fa-10x" style={{color: "green"}}/></div>
          <Card.Text >
            We have the formula for your finances
          </Card.Text>
        </Card.Body>
      </Card>
      {/* <h5>All Data in Store</h5>
      {JSON.stringify(ctx)} <br /> */}
    </React.Fragment >
  );
}
