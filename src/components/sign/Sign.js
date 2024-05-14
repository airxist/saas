import Button1 from '../../reusables/button1/Button1';
import Button2 from '../../reusables/button2/Button2';
import emojistar from '../../assets/images/emojistar.png';
import spiral from '../../assets/images/spiral-helix.png';
import './sign.css';

const Sign = () => {
  return (
    <section className='sign d-flex align-items-center justify-content-center text-center position-relative'>
        <div className='sign-board'>
            <h2 className='sign-h2'>Sign up for free today</h2>
            <p className='sign-para my-3 mx-auto'>
                Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
            </p>
            <div className='action'>
                <Button1 />
                <Button2 />
            </div>
        </div>
        <div className='emoji-div icon position-absolute d-none d-md-block'>
            <img src={emojistar} alt='' className='emojistar' />
        </div>
        <div className='spiral-div icon position-absolute d-none d-md-block'>
            <img src={spiral} alt='' className='spiral' />
        </div>
    </section>
  )
}

export default Sign
