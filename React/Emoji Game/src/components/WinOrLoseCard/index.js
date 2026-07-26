
import './index.css'

const WinOrLoseCard = props => {
  const {score, playGame} = props

  const PlayOneMore = () => {
    playGame()
  }

  return (
    <div className="WinLose">
      {score === 12 ? (
        <div className="winB">
          <div className="Win">
            <h1 className="WinH">You Won</h1>
            <p className="WinH">Best Score</p>
            <p className="WinS">12/12</p>
            <button onClick={PlayOneMore} type="button" className="Buttoon">
              Play Again
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="win or lose"
            className="WLimg"
          />
        </div>
      ) : (
        <div className="winB">
          <div className="Win">
            <h1 className="WinH">You Lose</h1>
            <p className="WinH">Score</p>
            <p className="WinS">{score}/12</p>
            <button onClick={PlayOneMore} type="button" className="Buttoon">
              Play Again
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="win or lose"
            className="WLimg"
          />
        </div>
      )}
    </div>
  )
}

export default WinOrLoseCard
