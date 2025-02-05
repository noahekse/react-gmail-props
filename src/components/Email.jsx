import '../styles/Email.css'

import backArrow from '../assets/icons/back-arrow.png'
import downloadButton from '../assets/icons/download-button.png'
import rateStarButton from '../assets/icons/rate-star-button.png'
import rubbishButton from '../assets/icons/rubbish-bin-delete-button.png'

function Email({email, setSelectedEmail}) {
  return (
    <div className="email">
      <main className="email-view">
        <nav className="email-toolbar">
          <ul>
            <li onClick={() => setSelectedEmail(null)}>
              <img className="icon" src={backArrow} alt="reply button" />
            </li>
            <li>
              <img className="icon" src={downloadButton} alt="archive button" />
            </li>
            <li>
              <img className="icon" src={rubbishButton} alt="delete button" />
            </li>
          </ul>
         
        </nav>
        <article className="email-content">
          <div className="title">
            <h1>{email.title}</h1>
          </div>
          <header className="email-content--header">
            <div className="avatar"></div>
            <div className="email-info">
              <div className="sender-info">
                <h2>{email.sender}</h2>
                <em>&lt;no-reply@{email.sender}.com&gt;</em>
              </div>
              <div className="user-info">
                <p>
                  to me <em>&lt;nicolas@boolean.co.uk&gt;</em>
                </p>
              </div>
            </div>
            <div className="date-info">
              <p>17 March 2021, 09:33</p>
            </div>
            
          </header>
          <section className="email-actions">
            <button>Reply</button>
            <button>Forward</button>
          </section>
        </article>
      </main>
    </div>
  )
}

export default Email