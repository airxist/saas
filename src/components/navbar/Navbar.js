import Button1 from "../../reusables/button1/Button1"
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar nav p-0 align-items-center">
      <li className="link"><a href="#about" className="body-med">About</a></li>
      <li className="link"><a href="#features" className="body-med">Features</a></li>
      <li className="link"><a href="#customers" className="body-med">Customers</a></li>
      <li className="link"><a href="#updates" className="body-med">Updates</a></li>
      <li className="link"><a href="#help" className="body-med">Help</a></li>
      <Button1 />
    </nav>
  )
}

export default Navbar
