import './frame.css';
import Tag from '../tag/Tag';

const Frame = ({tag, h2, body, sign}) => {
  return (
    <div className='frame mx-auto text-center'>
      {tag && <Tag tag={tag} />}
      <div className='frame-brief text-center'>
        <h2 className='frame-h2 text-grad'>{h2}</h2>
        {body && <p className={`frame-paragraph ${sign ? "body-med" : "body-large"}`}>{body}</p>}
      </div>
    </div>
  )
}

export default Frame
