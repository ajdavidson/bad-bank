function Home() {

  const ctx = React.useContext(UserContext);

  if (localStorage.getItem("ctx_data") === null) {
    localStorage.setItem("ctx_data", JSON.stringify(ctx));
  }

  console.log('Logged In...')
  console.table(ctx.loggedIn)
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col md={4}>
            <Card style={{width: '400px'}}>
              <Card.Header><i className="fas fa-home"/> <b>Globalin Bank Online Application</b></Card.Header>
              <Card.Body style={{textAlign: 'center'}}>
                <Card.Title>Hello, {ctx.loggedIn[0].name}</Card.Title>
                {/* <img src="bank.png" className="img-fluid" alt="Responsive image" /> */}
                <div style={{fontSize: '38px'}}><i className="fas fa-globe fa-10x" style={{color: "green"}}/></div>
                <Card.Text>
                  <strong>We have the formula for your finances</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/*<Col md={8} style={{position: 'relative'}}>*/}
          {/*  <br/>*/}
          {/*  <div style={{position: 'absolute', top: '0', right: '0'}}><h5><i className="fas fa-user-circle"/> {ctx.loggedIn[0].name}</h5></div>*/}
          {/*</Col>*/}
        </Row>

      </Container>


    </React.Fragment>
  );
}
