import './testimony.css';

const Testimony = (prop) => {
  return (
    <div className='testimony rounded-3 shadow-lg'>
      <p className='testimony-para body-med'>{prop.review}</p>
      <div className='profile d-flex align-items-center'>
        <img src={prop.img} className='profile-image' alt={prop.name} />
        <div className='credentials ms-2'>
            <p className='name m-0'>{prop.name}</p>
            <p className='handle m-0'>@{prop.handle}</p>
        </div>
      </div>
    </div>
  )
}

export default Testimony
