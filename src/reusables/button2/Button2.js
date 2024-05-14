import arrow from '../../assets/dark-arrow.svg';
import './button2.css';

const Button2 = () => {
  return (
    <button className='btn-2 btn py-0'>
      Learn more <img src={arrow} alt='' />
    </button>
  )
}

export default Button2
