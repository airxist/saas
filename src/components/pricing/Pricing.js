import './pricing.css';
import Frame from '../../reusables/frame/Frame';
import Plan from '../../reusables/plan/Plan';
import planTypes from './planTypes';

const Pricing = () => {
  return (
    <section className='pricing'>
      <Frame
        tag="Boost your productivity"
        h2="A more effective way to track progress"
        body="Effortlessly turn your ideas into afully functional, responsive, no code SaaS website in just minutes with the set of free components from Framer"
      />

      <div className='plan-board d-flex flex-column flex-lg-row align-items-center align-items-lg-end justify-content-between mx-auto'>
        {
            planTypes.map(planType => {
                return <Plan
                    key={planType.id}
                    {...planType}
                />
            })
        }
      </div>
    </section>
  )
}

export default Pricing
