import './index.css'

const EventItem = props => {
  const {eventObject, IdStatus, onEventButton} = props
  const {id, imageUrl, name, location, registrationStatus} = eventObject
  const addActiveClass = id === IdStatus ? 'active' : ''
  const onEvent = () => {
    onEventButton(registrationStatus, id)
  }

  return (
    <li className="event-item">
      <button
        className={`event-button ${addActiveClass}`}
        type="submit"
        onClick={onEvent}
      >
        <img src={imageUrl} className="event-image" alt="event" />
      </button>
      <p className="event-name">{name}</p>
      <p className="location-details">{location}</p>
    </li>
  )
}

export default EventItem
