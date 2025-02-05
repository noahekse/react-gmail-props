

const EmailListItem = ({ id, email, toggleRead, toggleStar, setSelectedEmail}) => {
    return (
        <li
        key={id}
        className={`emailItem ${email.read ? 'read' : 'unread'}`}
        onClick={() => 
        setSelectedEmail(email)}
      >
        <div className="select">
          <input
            className="select-checkbox"
            type="checkbox"
            checked={email.read}
            onChange={() => toggleRead(email)}
          />
        </div>
        <div className="star">
          <input
            className="star-checkbox"
            type="checkbox"
            checked={email.starred}
            onChange={() => toggleStar(email)}
          />
        </div>
        <div className="sender">{email.sender}</div>
        <div className="title">{email.title}</div>
      </li>
    );
};

export default EmailListItem;