import './testimonials.css';
import Frame from '../../reusables/frame/Frame';
import Testimony from '../../reusables/testimony/Testimony';
import testimonies from './testimonies';

const Testimonials = () => {
    const {
        alex, 
        josh, 
        morgan, 
        casey, 
        taylor, 
        riley,
        jordan,
        sam,
        harper
    } = testimonies;
    
  return (
    <section className='testimonials'>
      <Frame
        tag="Testimonials"
        h2="What our users say"
      />
      <div className='reviews mx-auto position-relative border border-info border-5'>
        {/* <div className='overlay position-absolute'></div> */}
        <div className='review-container border border-danger border-5 d-flex'>
          <div className='col d-flex flex-column'>
              <Testimony {...alex} />
              <Testimony {...josh} />
              <Testimony {...morgan} />
          </div>
          <div className='col d-flex flex-column'>
              <Testimony {...casey} />
              <Testimony {...taylor} />
              <Testimony {...riley} />
          </div>
          <div className='col d-flex flex-column'>
              <Testimony {...jordan} />
              <Testimony {...sam} />
              <Testimony {...harper} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
