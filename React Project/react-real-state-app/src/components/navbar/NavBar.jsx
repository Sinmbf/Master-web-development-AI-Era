import Button from "../button/Button";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="navbar-logo">
          <img className="inline-block w-10" src="/logo.png" alt="" />
          <span>SimbaState</span>
        </a>

        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Agents</a>
      </div>
      <div className="navbar-right">
        {/* <a href="" className="login">Sign in</a>
        <a href="" className="register">Sign up</a> */}
        <Button>Sign in</Button>
        <Button>Sign up</Button>
      </div>
    </nav>
  );
};

export default NavBar;
