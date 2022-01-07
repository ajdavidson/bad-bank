
function Balance() {
  const ctx = React.useContext(UserContext);
  console.log(ctx.users)
  return (
    <h1>Balance {JSON.stringify(ctx.users[0].balance)}</h1>
  )
}
