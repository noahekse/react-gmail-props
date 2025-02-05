
import EmailListItem from './EmailListItem';
import Email from './Email';
import { useState } from 'react';

const Emails = ({ filteredEmails, toggleRead, toggleStar, selectedEmail, setSelectedEmail}) => {
    

    return (
        selectedEmail ? (
          <Email email={selectedEmail} setSelectedEmail={setSelectedEmail} />
        ) : (
          <main className="emails">
            <ul>
              {filteredEmails.map((email) => (
                <EmailListItem 
                  key={email.id} 
                  id={email.id} 
                  email={email} 
                  toggleRead={toggleRead} 
                  toggleStar={toggleStar}
                  setSelectedEmail={setSelectedEmail}
                />
              ))}
            </ul>
          </main>
        )
      );
};

export default Emails;