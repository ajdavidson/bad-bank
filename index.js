function Spa() {
  return (
    <HashRouter>
      <NavBar />
      {/* <UserContext.Provider value={{ users: [{ name: 'Norman Osborn', email: 'norman.osborn@oscorp.io', password: '12345678', balance: 1337 }] }}> */}
      <UserContext.Provider value={{
        users: [{ level: 'Admin', name: 'Norman Osborn', email: 'norman.osborn@oscorp.io', password: 'M3p#1$t0', balance: 1337 }],
        xaction: [{ userID: 'norman.osborn@oscorp.io', type: 'Deposit', datetime: 'Sat, Jan 01 2022 23:39:58 GMT', amount: 100, balance: 1337 }]
      }
      }>
        <div className="container" style={{ padding: "20px" }}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>
    </HashRouter >
  );
}

ReactDOM.render(
  <Spa />,
  document.getElementById('root')
);
