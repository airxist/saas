import Tag from '../../reusables/tag/Tag';
import './hero.css';
import cylinder from '../../assets/images/cylinder 1.png';
import Button1 from '../../reusables/button1/Button1';
import Button2 from '../../reusables/button2/Button2';

const Hero = () => {
  return (
    <div className="hero d-flex  flex-column justify-content-between position-relative">
      <Tag tag="Version 2.0 is here" />
      <h1 className='hero-title text-grad'>Pathway to productivity</h1>
      <p className='hero-brief body-large text-midnight'>
        Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.
      </p>
      <div className='action'>
        <Button1 />
        <Button2 />
      </div>
      <img src={cylinder} alt='' className='cylinder position-absolute d-none d-md-block' />
    </div>
  )
}

export default Hero
