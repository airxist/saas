import logo from '../../assets/logosaas.svg';
import twitter from '../../assets/socials/twitterx.png';
import insta from '../../assets/socials/insta.png';
import pin from '../../assets/socials/pininterest.png';
import linked from '../../assets/socials/linkedin.png';
import tiktok from '../../assets/socials/tiktok.png';
import youtube from '../../assets/socials/youtube.png';
import './connect.css';

const Connect = () => {
  return (
    <div className='connect d-flex flex-column justify-content-between'>
        <div className='logo'>
            <img src={logo} alt='logo' className='d-block' />
            <small className='body-sm text-secondary'>
                Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website.
            </small>
        </div>
        <ul className='social-links d-flex m-0 p-0 align-items-center justify-content-between'>
            <li className='link'><a href='#'><img src={twitter} alt='twitter' /></a></li>
            <li className='link'><a href='#'><img src={insta} alt='insta' /></a></li>
            <li className='link'><a href='#'><img src={pin} alt='pin' /></a></li>
            <li className='link'><a href='#'><img src={linked} alt='linked' /></a></li>
            <li className='link'><a href='#'><img src={tiktok} alt='tiktok' /></a></li>
            <li className='link'><a href='#'><img src={youtube} alt='youtube' /></a></li>
        </ul>
    </div>
  )
}

export default Connect
