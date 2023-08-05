import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {liteMode: true}

  onLightModeClick = () => {
    const {liteMode} = this.state
    this.setState(prevState => ({liteMode: !liteMode}))
  }

  render() {
    const {liteMode} = this.state
    const btnText = liteMode ? 'Light Mode' : 'Dark Mode'
    const clsName = liteMode ? 'DarkMode' : 'LiteMode'

    return (
      <div className="main-container">
        <div className={`${clsName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button className="btn" type="button" onClick={this.onLightModeClick}>
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
