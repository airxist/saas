import './article.css';
import Button2 from '../button2/Button2';

const Article = ({icon, h5, paragraph}) => {
  return (
    <article className='article'>
      <span className='icon'>
        <img src={icon} className='icon-main' alt='' />
      </span>
      <h5 className='article-h5'>{h5}</h5>
      <div className='para-container'>
        <p className='para body-med'>{paragraph}</p>
        <Button2 />
      </div>
    </article>
  )
}

export default Article
