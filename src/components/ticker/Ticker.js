import ticker from '../../assets/images/Logo Ticker.png';
import './ticker.css';

const Ticker = () => {
  return (
    <div className='ticker-container'>
      <div className='ticker'>
        <img src={ticker} className='ticker-img-main' alt='' />
      </div>
    </div>
  )
}

export default Ticker
