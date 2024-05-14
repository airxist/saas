import toggler from '../../assets/toggler.svg';
import './toggler.css';

const Toggler = () => {
  return (
    <span className='toggler badge p-0'>
      <img src={toggler} alt='' className='toggle-btn' />
    </span>
  )
}

export default Toggler
