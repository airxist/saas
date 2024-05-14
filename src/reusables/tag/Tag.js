import './tag.css';

const Tag = ({tag}) => {
  return (
    <div className="tag rounded-2">
      <p className="tag-print m-0">{tag}</p>
    </div>
  )
}

export default Tag
