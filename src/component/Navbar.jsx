const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h3 style={{ fontWeight: "600" }}>Isha Vats</h3>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
  <a href="#projects" style={styles.link}>Projects</a>
  <a href="#contact" style={styles.link}>Contact</a>
</div>

    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 12%",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
    position: "sticky",
    top: 0,
    zIndex: 100
  },
  link: {
    marginLeft: "25px",
    color: "#1f2937",
    fontWeight: "500"
  }
};

export default Navbar;
