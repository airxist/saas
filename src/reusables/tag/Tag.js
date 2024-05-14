import './tag.css';

const Tag = ({tag, pop}) => {
  return (
    <div className={`tag rounded-2 d-flex align-items-center justify-content-center ${pop ? "lighten p-1" : null}`}>
      <p className={`tag-print m-0 ptag ${pop ? "text-pop " : null}`}>{tag}</p>
    </div>
  )
}

export default Tag
