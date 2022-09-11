// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {state, continuePlaying} = props
  const {score} = state

  const fullScore = score === 12
  const gameStatus = fullScore ? 'You Won' : 'You Lose'
  const scoreStatus = fullScore ? 'Best Score' : 'Score'
  const totalScore = fullScore ? '12/12' : `${score}/12`

  const onPlayAgain = () => {
    continuePlaying()
  }

  const imageUrl = fullScore
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="image-background">
      <div className="score-container">
        <h1 className="main-heading">{gameStatus}</h1>
        <p className="sub-heading">{scoreStatus}</p>
        <p className="score">{totalScore}</p>
        <button
          type="button"
          className="play-again-button"
          onClick={onPlayAgain}
        >
          Play Again
        </button>
      </div>
      <img src={imageUrl} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
