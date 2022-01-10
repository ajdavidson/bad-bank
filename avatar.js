
function Avatar() {
  const ctx = React.useContext(UserContext);

  return (
    <div style={{position: 'absolute',top:'170',right:'10'}}><p>{ctx.loggedIn[0].name}</p></div>
  );
}