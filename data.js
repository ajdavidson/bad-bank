function Data() {
  const ctx = React.useContext(UserContext);


  // go to your home
  const history = useHistory();
  console.log(history);
  history.push("/");
  var storedCTX = JSON.parse(localStorage.getItem("ctx_data"));

  //console.log('From Local Storage:Data', {storedCTX});
  //console.log('Last Log In ', storedCTX.loggedIn[0].name)


  return (

    <>
      {console.log('Set Data ', { storedCTX })}
      {storedCTX !== null ? (
        <UserContext.Provider value={storedCTX}>
          <div className="container-fluid">
            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/login/" component={Login} />
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            <Route path="/balance/" component={Balance} />
            <Route path="/alldata/" component={AllData} />
          </div>
        </UserContext.Provider>

      ) : (
        <UserContext.Provider value={{
          users: [
            {
              acctNum: '990011001',
              level: 'Administrator',
              name: 'Norman Osborn',
              email: 'norman.osborn@oscorp.io',
              password: 'M3p#1$t0',
              balance: 1337
            },
            {
              acctNum: '990022002',
              level: 'Manager',
              name: 'Harry Osborn',
              email: 'harry.osborn@oscorp.io',
              password: 'm@2yJ4n3',
              balance: 1225
            },
            {
              acctNum: '990033003',
              level: 'Manager',
              name: 'Richard Parker',
              email: 'richard.parker@oscorp.io',
              password: 'Cc0nn025',
              balance: 1100
            },
            {
              acctNum: '990029414',
              level: 'Individual',
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
              datetime: 'Sat, 1/1/2022, 1:41:22 PM',
              amount: 2220,
              balance: 13100
            },
            {
              userID: 'norman.osborn@oscorp.io',
              type: 'Deposit',
              datetime: 'Sun, 1/2/2022, 2:41:02 PM',
              amount: 237,
              balance: 13337
            },
            {
              userID: 'norman.osborn@oscorp.io',
              type: 'Withdrawal',
              datetime: 'Mon, 1/3/2022, 11:39:58 PM',
              amount: 10000,
              balance: 1337
            },
            {
              userID: 'richard.parker@oscorp.io',
              type: 'Deposit',
              datetime: 'Sat, 1/1/2022, 1:19:50 PM',
              amount: 220,
              balance: 700
            },
            {
              userID: 'richard.parker@oscorp.io',
              type: 'Deposit',
              datetime: 'Mon, 1/3/2022, 3:19:52 PM',
              amount: 400,
              balance: 1100
            },
            {
              userID: 'harry.osborn@oscorp.io',
              type: 'Withdrawal',
              datetime: 'Sat, 1/1/2022, 1:41:22 AM',
              amount: 2220,
              balance: 1000
            },
            {
              userID: 'harry.osborn@oscorp.io',
              type: 'Deposit',
              datetime: 'Sun, 1/2/2022, 2:41:02 AM',
              amount: 25,
              balance: 1025
            },
            {
              userID: 'harry.osborn@oscorp.io',
              type: 'Deposit',
              datetime: 'Mon, 1/3/2022, 11:11:12 PM',
              amount: 100,
              balance: 1225
            }
          ],
          loggedIn: [{
            acctNum: '990011001',
            level: 'Administrator',
            name: 'Norman Osborn',
            email: 'norman.osborn@oscorp.io',
            password: 'M3p#1$t0',
            balance: 1337
          }]
        }
        }>

          <div className="container-fluid">
            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/login/" component={Login} />
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            <Route path="/balance/" component={Balance} />
            <Route path="/alldata/" component={AllData} />
          </div>
        </UserContext.Provider>
      )}
    </>

  )
}