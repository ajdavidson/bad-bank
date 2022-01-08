
function Home() {
  const ctx = React.useContext(UserContext);
  return (
    <React.Fragment>
      <Card style={{ width: '400px' }}>
        <Card.Header><i class="fas fa-globe"></i> <b>Globalin Bank Online Application</b></Card.Header>
        <Card.Body>
          <Card.Title>Welcome to Globalin Bank</Card.Title>
          {/* <img src="bank.png" className="img-fluid" alt="Responsive image" /> */}
          <div style={{ fontSize: '38px' }}><i class="fas fa-globe fa-10x" style={{ color: "green" }}></i></div>
          <Card.Text>
            You can move around using the navigation bar.
          </Card.Text>
        </Card.Body>
      </Card>
      {/* <h5>All Data in Store</h5>
      {JSON.stringify(ctx)} <br /> */}
    </React.Fragment >
  );
}
