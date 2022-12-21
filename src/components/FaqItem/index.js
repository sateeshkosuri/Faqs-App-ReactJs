import {Component} from 'react'
import './index.css'

const minusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
const plusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  renderActiveAnswer = () => {
    const {faqsListDetails} = this.props
    const {answerText} = faqsListDetails
    const {isActive} = this.state

    if (isActive) {
      return (
        <div className="answer-container">
          <hr className="line" />
          <p className="description">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onButtonClick = () => {
    const {isActive} = this.state
    this.setState({isActive: !isActive})
  }

  renderActiveImage = () => {
    const {isActive} = this.state
    const images = isActive ? minusImage : plusImage
    const altText = isActive ? 'minus' : 'plus'

    return (
      <button type="button" className="button" onClick={this.onButtonClick}>
        <img src={images} alt={altText} className="image" />
      </button>
    )
  }

  render() {
    const {faqsListDetails} = this.props
    const {questionText} = faqsListDetails
    return (
      <li className="list-container">
        <div className="faqs-list-container">
          <h1 className="title">{questionText}</h1>
          {this.renderActiveImage()}
        </div>
        {this.renderActiveAnswer()}
      </li>
    )
  }
}

export default FaqItem
