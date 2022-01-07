
function Home() {
  const ctx = React.useContext(UserContext);
  return (
    <React.Fragment>
      <Card style={{ width: '400px' }}>
        <Card.Header>Bad Bank Online Application</Card.Header>
        <Card.Body>
          <Card.Title>Welcome to Bad Bank</Card.Title>
          {/* <img src="bank.png" className="img-fluid" alt="Responsive image" /> */}
          <div style={{ fontSize: '36px' }}><i class="fas fa-university fa-10x"></i></div>
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
