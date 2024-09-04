// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickItem = () => {
    updateActiveTabId(tabId)
  }
  const activeTabClassName = isActive ? 'active-tab' : ''

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`item-button ${activeTabClassName}`}
        onClick={onClickItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
