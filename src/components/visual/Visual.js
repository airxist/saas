import './visual.css';
import visual from '../../assets/images/Visual.png';
import torus from '../../assets/images/half-torus 1.png';

const Visual = () => {
  return (
    <div className="visual position-relative">
      <img src={visual} alt='' className='visual-img-main' />
      <img src={torus} alt='' className='torus position-absolute d-none d-lg-block' />
    </div>
  )
}

export default Visual
