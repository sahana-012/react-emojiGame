/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLooseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    emojiClickList: {},
    isTrue: false,
  }

  onClickEmoji = id => {
    const {score, topScore, emojiClickList} = this.state
    const isClicked = id in emojiClickList
    if (isClicked) {
      this.setState(prevState => ({
        score: prevState.score,
        topScore: prevState.topScore,
        emojiClickList: prevState.emojiClickList,
        isTrue: true,
      }))
    } else {
      const newScore = score + 1
      const newTopScore = newScore >= topScore ? newScore : topScore
      const newEmojiClickList = emojiClickList
      newEmojiClickList[id] = id
      this.setState({
        score: newScore,
        topScore: newTopScore,
        emojiClickList: newEmojiClickList,
        isTrue: newScore === 12,
      })
    }
  }

  continuePlaying = () => {
    this.setState(prevState => ({
      score: 0,
      topScore: prevState.topScore,
      emojiClickList: {},
      isTrue: false,
    }))
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const emojiList = this.shuffledEmojisList()
    const {isTrue} = this.state

    return (
      <div className="app-container">
        <NavBar state={this.state} />
        {!isTrue && (
          <ul className="emoji-list-container">
            {emojiList.map(eachEmoji => (
              <EmojiCard
                key={eachEmoji.id}
                emojiDetails={eachEmoji}
                onClick={this.onClickEmoji}
              />
            ))}
          </ul>
        )}
        {isTrue && (
          <WinOrLooseCard
            state={this.state}
            continuePlaying={this.continuePlaying}
          />
        )}
      </div>
    )
  }
}

export default EmojiGame
