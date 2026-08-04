import "./Navbar.css";

function Navbar() {


const navItems = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },
  {
    id: 2,
    title: "About",
    link: "#",
  },
  {
    id: 3,
    title: "Services",
    link: "#",
  },
  {
    id: 4,
    title: "Projects",
    link: "#",
  },
  {
    id: 5,
    title: "Contact",
    link: "#",
  },
];

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Techy</h2>
      </div>

      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.id}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>

      <button className="nav-btn">Get Started</button>
    </nav>
  );
}

export default Navbar;