import "../style/Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className="container">
        <h3>Isha Vats</h3>
        <div className="nav-links">
          <a href="#projects" >Projects</a>
          <a href="#contact" >Contact</a>
        </div>

      </nav>
    </header>

  );
};

export default Navbar;
