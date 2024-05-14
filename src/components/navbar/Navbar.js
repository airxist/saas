import Button1 from "../../reusables/button1/Button1"
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar nav p-0 border border-success align-items-center">
      <li className="link"><a href="#about">About</a></li>
      <li className="link"><a href="#features">Features</a></li>
      <li className="link"><a href="#customers">Customers</a></li>
      <li className="link"><a href="#updates">Updates</a></li>
      <li className="link"><a href="#help">Help</a></li>
      <Button1 />
    </nav>
  )
}

export default Navbar
