import { Link } from "react-router-dom";
const NavBarLink = ({ children, href, setOpen }) => {
  return (
    <Link to={`/${href}`} className="nav-links" onClick={() => setOpen(false)}>
      {children}
    </Link>
  );
};

export default NavBarLink;
