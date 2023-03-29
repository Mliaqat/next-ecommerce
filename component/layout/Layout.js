function Layout(props) {
  return (
    <header>
      <div>
        <h1>Header</h1>
      </div>
      <main>{props.children}</main>
    </header>
  );
}

export default Layout;
