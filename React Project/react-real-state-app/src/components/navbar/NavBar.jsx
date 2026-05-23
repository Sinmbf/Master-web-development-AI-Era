import { Link } from "react-router-dom";
import NavBarLink from "./NavBarLink";
import { useState } from "react";

const NavBar = ({ user }) => {
  const [open, setOpen] = useState(false);

  // console.log("hello");
  return (
    <nav className="flex items-center h-15 md:h-25 py-2 bg-white border border-white">
      <div className="navbar-left">
        <a href="/" className="flex items-center gap-2">
          <img
            className="inline-block w-10"
            src="/logo.png"
            alt="SidhaMakaan Logo"
          />
          <span className="md:hidden lg:inline-block text-[#333] text-[20px] font-bold">
            SidhaaMakan
          </span>
        </a>

        <NavBarLink href="">Home</NavBarLink>
        <NavBarLink href="about">About</NavBarLink>
        <NavBarLink href="contact">Contact</NavBarLink>
        <NavBarLink href="agents">Agents</NavBarLink>
      </div>
      <div className="navbar-right">
        {/* <a href="" className="login">Sign in</a>
        <a href="" className="register">Sign up</a> */}

        {user ? (
          <div className="flex items-center gap-2 font-bold">
            <Link to="/profile">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
            </Link>
            <span className="mr-5 md:block hidden">John Doe</span>
            <Link
              to="/profile"
              className="md:block hidden relative px-6 py-3 bg-[#fece51] cursor-pointer hover:bg-yellow-500 transition-colors duration-300 border-0"
            >
              {/* Notification */}
              <div className="absolute -top-2 -right-2 bg-red-600 text-white h-6 w-6 rounded-full text-center">
                3
              </div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/signin">
              <button className="btn-auth bg-[#e9e6e4] hover:bg-[#e0d7d2]">
                Sign in
              </button>
            </Link>
            <Link to="/signup">
              <button className="btn-auth bg-[#fece51] hover:bg-[#ebae11]">
                Sign up
              </button>
            </Link>
          </>
        )}

        <div className="md:hidden cursor-pointer z-10 transition-all duration-300">
          <img
            src={open ? "/cross.jpg" : "/menu.png"}
            // src="/menu.png"
            alt=""
            className="w-10 h-10 rounded-[50%]"
            // onClick={handleClickMenu}
            onClick={() => setOpen(!open)}
          />
        </div>

        <div
          className={`${open ? "translate-x-0" : "translate-x-full"} nav-menu`}
        >
          <NavBarLink href="" setOpen={setOpen}>
            Home
          </NavBarLink>
          <NavBarLink href="about" setOpen={setOpen}>
            About
          </NavBarLink>
          <NavBarLink href="contact" setOpen={setOpen}>
            Contact
          </NavBarLink>
          <NavBarLink href="agents" setOpen={setOpen}>
            Agents
          </NavBarLink>
          <NavBarLink href="signin" setOpen={setOpen}>
            Sign in
          </NavBarLink>
          <NavBarLink href="signup" setOpen={setOpen}>
            Sign up
          </NavBarLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
