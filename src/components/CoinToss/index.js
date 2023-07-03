import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {toss: 0, total: 0, heads: 0, tails: 0}

  onClickTossButton = () => {
    const tossResult = Math.floor(Math.random() * 2)

    this.setState({toss: tossResult})
    this.setState(prevState => ({total: prevState.total + 1}))
    this.setState(prevState => ({tails: prevState.tails + tossResult}))
    this.setState(prevState => ({
      heads: prevState.total - prevState.tails,
    }))
  }

  coinImage = () => {
    const {toss} = this.state

    if (toss === 0) {
      return (
        <img
          className="coin-image"
          alt="toss result"
          src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
        />
      )
    }
    return (
      <img
        className="coin-image"
        alt="toss result"
        src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
      />
    )
  }

  render() {
    const {total, heads, tails} = this.state
    return (
      <div className="bg-container">
        <div className="coin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          {this.coinImage()}
          <button
            type="button"
            className="button"
            onClick={this.onClickTossButton}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count-text">Total:{total}</p>
            <p className="count-text">Heads:{heads}</p>
            <p className="count-text">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
