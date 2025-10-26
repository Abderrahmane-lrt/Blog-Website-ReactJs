import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <ul class="nav justify-content-center  ">
      <li className="nav-item">
        <Link to="/" className="nav-link fw-bold hover-underline-pointer  text-dark">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/google" className="nav-link fw-bold  hover-underline-pointer text-dark">Google</Link>
      </li>
      <li className="nav-item">
        <Link to="/trends" className="nav-link fw-bold  hover-underline-pointer   text-dark">Trends</Link>
      </li>
      <li className="nav-item" >
        <Link to="/about" className="nav-link fw-bold  hover-underline-pointer  text-dark">About</Link>
      </li>
      <li className="nav-item">
        <Link to="/contact" className="nav-link fw-bold  hover-underline-pointer  text-dark">Contact</Link>
      </li >
      <img src="/line.png" alt="" width={"100%"} height={"50"} />
    </ul>
  );
};

export default Navbar;
