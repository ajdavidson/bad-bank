function Spa() {
  return (
    <>

    <HashRouter>
      <NavBar/>
      <Data/>
    </HashRouter>
</>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
