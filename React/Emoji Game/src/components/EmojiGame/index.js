import {Component} from 'react'
import './index.css'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {Score: 0, TopScore: 0, WLorGa: false, EmoList: []}

  playGameMore = () => {
    this.setState(prevState => ({
      TopScore: Math.max(prevState.TopScore, prevState.Score),
      Score: 0,
      WLorGa: false,
      EmoList: [],
    }))
  }

  ListChange = id => {
    const {Score, EmoList} = this.state

    if (EmoList.includes(id)) {
      this.setState({WLorGa: true})
      return
    }

    this.shuffledEmojisList()

    if (Score + 1 === 12) {
      this.setState(prevState => ({
        Score: prevState.Score + 1,
        WLorGa: true,
      }))
      return
    }

    this.setState(prevState => ({
      Score: prevState.Score + 1,
      EmoList: [...prevState.EmoList, id],
    }))
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {Score, TopScore, WLorGa} = this.state
    const {emojisList} = this.props
    const NavList = {
      Score,
      TopScore,
      WLorGa,
    }
    return (
      <div className="whole">
        <NavBar data={NavList} />
        <div className="back">
          {WLorGa ? (
            <WinOrLoseCard
              className="WinCard"
              score={Score}
              playGame={this.playGameMore}
            />
          ) : (
            <ul className="emojiList">
              {emojisList.map(each => (
                <EmojiCard
                  key={each.id}
                  emojiitem={each}
                  onCLickButton={this.ListChange}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
