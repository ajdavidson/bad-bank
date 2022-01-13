function Data() {
  const ctx = React.useContext(UserContext);



  const history = useHistory();
  console.log(history);
  history.push("/");
  var storedCTX = JSON.parse(localStorage.getItem("ctx_data"));

  //console.log('From Local Storage:Data', {storedCTX});
  //console.log('Last Log In ', storedCTX.loggedIn[0].name)


  return (

    <>
      {console.log('Set Data ', {storedCTX})}
      {storedCTX !== null ? (
          <UserContext.Provider value={storedCTX}>
            <div className="container" style={{padding: "20px"}}>
              <Route path="/" exact component={Home}/>
              <Route path="/CreateAccount/" component={CreateAccount}/>
              <Route path="/login/" component={Login}/>
              <Route path="/deposit/" component={Deposit}/>
              <Route path="/withdraw/" component={Withdraw}/>
              <Route path="/balance/" component={Balance}/>
              <Route path="/alldata/" component={AllData}/>
            </div>
          </UserContext.Provider>

      ):(
  <UserContext.Provider value={{
    users: [
      {
        acctNum: 990011001,
        level: 'Admin',
        name: 'Norman Osborn',
        email: 'norman.osborn@oscorp.io',
        password: 'M3p#1$t0',
        balance: 1337
      },
      {
        acctNum: 990022002,
        level: 'Manager',
        name: 'Harry Osborn',
        email: 'harry.osborn@oscorp.io',
        password: 'm@2yJ4n3',
        balance: 1225
      },
      {
        acctNum: 990033003,
        level: 'Manager',
        name: 'Richard Parker',
        email: 'richard.parker@oscorp.io',
        password: 'Cc0nn025',
        balance: 1100
      },
      {
        acctNum: 990029414,
        level: 'User',
        name: 'Eugene Thompson',
        email: 'e.thompson@flash.io',
        password: '@g3nTv3n0m',
        balance: 100
      }
    ],
    xaction: [
      {
        userID: 'norman.osborn@oscorp.io',
        type: 'Withdrawal',
        datetime: 'Sat, Jan 01 2022 01:41:22 GMT',
        amount: 2220,
        balance: 13100
      },
      {
        userID: 'norman.osborn@oscorp.io',
        type: 'Deposit',
        datetime: 'Sun, Jan 02 2022 14:41:02 GMT',
        amount: 237,
        balance: 13337
      },
      {
        userID: 'norman.osborn@oscorp.io',
        type: 'Withdrawal',
        datetime: 'Mon, Jan 03 2022 23:39:58 GMT',
        amount: 10000,
        balance: 1337
      },
      {
        userID: 'richard.parker@oscorp.io',
        type: 'Deposit',
        datetime: 'Sat, Jan 01 2022 13:19:52 GMT',
        amount: 220,
        balance: 700
      },
      {
        userID: 'richard.parker@oscorp.io',
        type: 'Deposit',
        datetime: 'Mon, Jan 03 2022 03:19:52 GMT',
        amount: 400,
        balance: 1100
      },
      {
        userID: 'harry.osborn@oscorp.io',
        type: 'Withdrawal',
        datetime: 'Sat, Jan 01 2022 01:41:22 GMT',
        amount: 2220,
        balance: 1000
      },
      {
        userID: 'harry.osborn@oscorp.io',
        type: 'Deposit',
        datetime: 'Sun, Jan 02 2022 14:41:02 GMT',
        amount: 25,
        balance: 1025
      },
      {
        userID: 'harry.osborn@oscorp.io',
        type: 'Deposit',
        datetime: 'Mon, Jan 03 2022 11:11:12 GMT',
        amount: 100,
        balance: 1225
      }
    ],
    loggedIn: [{
      acctNum: 990011001,
      level: 'Admin',
      name: 'Norman Osborn',
      email: 'norman.osborn@oscorp.io',
      password: 'M3p#1$t0',
      balance: 1337
    }]
  }
  }>

    <div className="container" style={{padding: "20px"}}>
      <Route path="/" exact component={Home}/>
      <Route path="/CreateAccount/" component={CreateAccount}/>
      <Route path="/login/" component={Login}/>
      <Route path="/deposit/" component={Deposit}/>
      <Route path="/withdraw/" component={Withdraw}/>
      <Route path="/balance/" component={Balance}/>
      <Route path="/alldata/" component={AllData}/>
    </div>
  </UserContext.Provider>
      )}
    </>

  )
}