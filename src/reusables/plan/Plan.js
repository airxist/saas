import ticklight from '../../assets/images/tick-light.png';
import tickdark from '../../assets/images/tick-dark.png';
import './plan.css';

const Plan = ({type,fee, popular, benefits}) => {
  return (
    <div className={`plan rounded-4 shadow-lg ${popular ? "bg-dark text-light my-3 my-lg-0" : null}`}>
      <div className='plan-main'>
        <div className='type-popular d-flex'>
            <p className='plan-type m-0'>{type}</p>
            {popular && <p className='plan-popularity ms-auto m-0'>most popular</p>}
        </div>
        <div className='plan-fee d-flex align-items-end'>
            <h2 className='m-0'>${fee}</h2>/<small>monthly</small>
        </div>
        <button className={`plan-btn btn w-100 ${popular ? "bg-light text-dark" : "bg-dark text-light"}`}>
            {type === "free" ? "Get started for free" : "Sign up now"}
        </button>
        <div className='plan-benefits'>
            {
                benefits.map((benefit, benindex) => {
                    return <div className='benefit d-flex align-items-center mt-3' key={benindex}>
                        <img src={popular ? ticklight : tickdark} alt='' className='tick' />
                        <p className='benefit-para m-0'>{benefit}</p>
                    </div>
                })
            }
        </div>
      </div>
    </div>
  )
}

export default Plan
