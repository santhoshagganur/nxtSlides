import './index.css'

const Slide = props => {
  const {slideDetails} = props
  const {heading, description} = slideDetails

  return (
    <li className="each-slide-container">
      <h1 className="each-slide-heading"> {heading} </h1>
      <p className="each-slide-description"> {description} </p>
    </li>
  )
}

export default Slide
