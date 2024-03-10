import React, { useState } from 'react';
import './Chat.css';
import FormImage from '../../assets/images/personContact.jpg';
import chat from '../../assets/images/chats.png';

//the useState is used to define and manage the state of three variables in a React functional component.
function ChatForm() {
  const [showChat, setShowChat] = useState(false);
  const [section, setSection] = useState(null);
  const [subSection, setSubSection] = useState(null);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Wait for a moment');
    console.log(formData);
  };


  const toggleChat = () => {
    setShowChat(!showChat);//If showChat is false, the chat icon is rendered, and if it is true, nothing is rendered.
  }

  const handleSectionClick = (value) => { //function is triggered when a user clicks on one of the buttons 
    setSection(value);
    setSubSection(null);
  };

  const handleSubSectionClick = (value) => {
    setSubSection(value);
  };



  

  const handleBackClick = () => {
    setSection(null);
    setSubSection(null);
  };
  

  return (
  /*contact us page  */
    <div className="chat-container">
      <div className="image-container"></div>
        <div className="form-container">
          <h1 className="form-title">CONTACT ME</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName" className="input-label">First Name:</label> {/*feild of the form */}
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />

            <label htmlFor="lastName" className="input-label">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />

            <label htmlFor="email" className="input-label">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="subject" className="input-label">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <label htmlFor="message" className="input-label">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
  

  {/*chat option  */ }
    <div className="app-container">
      <div className="chat-button" onClick={toggleChat}  > {/* it triggers the toggleChat function which toggles the value of the showChat state variable using the setShowChat function.*/ }
          <img src={chat} alt="chat" />
      </div>

      {showChat && (   //If showChat is false, then this <div> will not be rendered.
       <div className="chat">
          <div className="chat-header"> <h2>Quick Assist</h2></div>
          <div className="chat-body">
            {!section && (
              <div>
                <p>Select a section:</p>
                <button onClick={() => handleSectionClick('web page')}>Web Page</button>
                <button onClick={() => handleSectionClick('contacts')}>Contacts</button>
                <button onClick={() => handleSectionClick('other')}>Other</button>
              </div>
            )}
            {section === 'web page' && (
              <div>
                <p>Select a sub-section:</p>
                <button onClick={() => handleSubSectionClick('basic')}>Basic</button>
                <button onClick={() => handleSubSectionClick('advance')}>Advance</button>
                <button onClick={() => handleSubSectionClick('other')}>Other</button>
                
              </div>
              
            )}
            {subSection && (
              <div>
                <p>You selected: {subSection} under {section} section.</p>
                <button onClick={() => handleBackClick()}>Back</button>

                {/* code for database connection can be added here */}
              </div>
            )}
          </div>
        </div>
          )}
        </div>
    </div>
  );
}

export default ChatForm;


  
  
  