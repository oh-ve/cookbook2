const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Bad British Food</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/recipes">Breakfast</a>
        <a href="/recipes">Lunch</a>
        <a href="/recipes">Dinner</a>
        <a href="/recipes">Desert</a>
      </div>
    </nav>
  );
};

export default Navbar;
