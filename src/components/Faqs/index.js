import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="app-container">
      <div className="faqs-container">
        <h1 className="main-heading">FAQs</h1>
        <ul>
          {faqsList.map(eachItem => (
            <FaqItem faqsListDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Faqs
