// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl, category} = appDetails

  return (
    <li className="app-item-container">
      <img
        src={imageUrl}
        alt={appName}
        value={category}
        className="app-image"
      />
      <p className="app-heading">{appName}</p>
    </li>
  )
}

export default AppItem
