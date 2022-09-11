// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClick} = props
  const {emojiName, id, emojiUrl} = emojiDetails

  const onEmojiClick = () => {
    onClick(id)
  }

  return (
    <li className="emoji-card-container">
      <button className="emoji-button" type="button" onClick={onEmojiClick}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
