import logo from './../../assets/logosaas.svg';
import vector from './../../assets/Vector.svg';
import vector2 from './../../assets/vector2.svg';
import './logo.css';

const Logo = () => {
  return (
    <div className='logo-box d-flex align-items-center justify-content-between'>
      <img src={logo} alt='logo' className='logo-main' />
      <p className='made m-0 d-none d-md-block body-sm'>made by</p>
      <div className='framer-box d-none d-md-flex align-items-center justify-content-end'>
        <img src={vector} alt='framer-logo' className='me-1' />
        <img src={vector2} alt='framer-logo' />
      </div>
    </div>
  )
}

export default Logo
