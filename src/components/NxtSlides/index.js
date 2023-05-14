import {Component} from 'react'

import Slide from '../Slide'
import './index.css'

class NxtSlides extends Component {
  state = {activeTab: initialSlidesList[0]}

  render() {
    const {initialSlidesList} = this.props
    return (
      <>
        <div className="header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png"
            alt="nxt slides logo"
            className="app-logo"
          />
          <h1 className="app-name"> Nxt Slides </h1>
        </div>
        <div className="bottom-container">
          <button className="new-button" type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
              alt="new plus icon"
              className="plus-icon"
            />
            <p className="button-text"> New </p>
          </button>
          <div className="slides-container">
            <ul className="left-slides-container">
              {initialSlidesList.map(each => (
                <Slide key={each.id} slideDetails={each} />
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default NxtSlides
