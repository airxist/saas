import './frame.css';
import Tag from '../tag/Tag';

const Frame = ({tag, h2, body}) => {
  return (
    <div className='frame mx-auto text-center'>
      <Tag tag={tag} />
      <div className='frame-brief text-center'>
        <h2 className='frame-h2'>{h2}</h2>
        {body && <p className='frame-paragraph body-large'>{body}</p>}
      </div>
    </div>
  )
}

export default Frame
