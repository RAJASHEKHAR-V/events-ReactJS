import './index.css'

const apiStatusConstants = {
  yetRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {apiStatus} = props

  const onYetResister = () => (
    <div className="active-item">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        className="yet-register-image"
        alt="yet to register"
      />
      <p className="yet-registration-description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <div>
        <button className="button" type="submit">
          Register Here
        </button>
      </div>
    </div>
  )

  const onRegistration = () => (
    <div className="active-item">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        className="register-image"
        alt="registered"
      />
      <h1 className="registered-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  const onRegistrationClosed = () => (
    <div className="active-item">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        className="register-closed-image"
        alt="registrations closed"
      />
      <h1 className="registration-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registration-closed-para">
        Stay tuned. We will reopen the registrations soon
      </p>
    </div>
  )

  const onInitialLoading = () => (
    <p className="initial-event-para">
      Click on an event, to view its registration details
    </p>
  )

  switch (apiStatus) {
    case apiStatusConstants.yetRegister:
      return onYetResister()
    case apiStatusConstants.registered:
      return onRegistration()
    case apiStatusConstants.registrationClosed:
      return onRegistrationClosed()
    default:
      return onInitialLoading()
  }
}
export default ActiveEventRegistrationDetails
