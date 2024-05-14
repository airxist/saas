import './footing.css';

const Footing = ({img, h4, para}) => {
  return (
    <div className='footing border rounded-3 mt-3'>
      <div className='footing-img mx-auto'>
        <img src={img} alt='' className='footing-img-main' />
      </div>
      <article className='footing-brief text-center'>
        <h4 className='footing-h4'>{h4}</h4>
        <p className='footing-para body-med'>{para}</p>
      </article>
    </div>
  )
}

export default Footing
