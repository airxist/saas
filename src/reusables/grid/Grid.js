import './grid.css';
import data from './data';
import Article from '../article/Article';

const Grid = () => {
  return (
    <div className='grid container'>
      <div className='row gy-3 justify-content-center justify-content-lg-between'>
        {
            data.map(article => {
                return <Article
                    key={article.index}
                    {...article}
                />
            })
        }
      </div>
    </div>
  )
}

export default Grid
