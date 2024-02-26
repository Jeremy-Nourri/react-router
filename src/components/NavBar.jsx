import { Link } from "react-router-dom";

function NavBar() {
    return ( 
        <nav>
            <Link className="link" to={"/"}>Home</Link>
            <Link className="link" to={"/contact"}>Contact</Link>
            <Link className="link" to={"/about"}>About</Link>
        </nav>
     );
}

export default NavBar;