
import './index.css'

const NavBar = props => {
  const {data} = props
  const {WLorGa, Score, TopScore} = data

  return (
    <nav className="NavBar">
      <div className="game">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="logo"
          alt="emoji logo"
        />
        <h1 className="para">Emoji Game</h1>
      </div>
      {!WLorGa && (
        <div className="dispL">
          <p className="para">Score: {Score}</p>
          <p className="para">Top Score: {TopScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
