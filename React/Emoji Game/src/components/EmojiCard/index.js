
import './index.css'

const EmojiCard = props => {
  const {emojiitem, onCLickButton} = props
  const {id, emojiUrl, emojiName} = emojiitem

  const onCliik = () => {
    onCLickButton(id)
  }

  return (
    <li className="card">
      <button className="Button" type="button" onClick={onCliik}>
        <img src={emojiUrl} alt={emojiName} className="imagg" />
      </button>
    </li>
  )
}

export default EmojiCard
