import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ZoomImage from './zoom.jpeg';
import GmeetImage from './googleMeet.png';
import teams from './teams.png';
import physicalMeeting from './physicalMeeting.jpg';
import './RequestMeeting.css';
import NavHome from '../../../../components/NavBar/NavHome';



function RequestMeetingHome() {
  //const sellers = ['Amila', 'Nimila', 'Kamila', 'Pamila', 'Sumila']; 
  //const [selectedSeller, setSelectedSeller] = useState(sellers[0]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [showReasonField, setShowReasonField] = useState(false);
  const [reason, setReason] = useState('');


 

// below part 
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

//  const handleConfirm = () => {
 //   if (selectedDate) {
 //    // alert(`Send email to ${selectedSeller}: Date is ${selectedDate.toLocaleDateString()}, Time is ${selectedDate.toLocaleTimeString()}`);
 //   }
//  };



  
    function handleMethodSelection(method) {
      setSelectedMethod(method);
    }
  
    function handleArrangeMeeting() {
      if (selectedMethod && selectedDate) {
        setShowReasonField(true);
        alert('Arrange the meeting on ' + selectedDate.toLocaleString() + ' using ' + selectedMethod);
      } else {
        alert('Please select date/time and platform to arrange a meeting.');
      }
    }
    

 


  return (<>
   <div className="req-demo-content">
    <NavHome/>
{/*select date*/ }
    <h2 style={{ color: 'blue' }}>Request Meeting</h2>
    <div className="up" style={{marginTop:'6rem'}}>

      <div style={{position:'absolute', top:'40%', left:'10%'}}>
        <label htmlFor="seller-dropdown">Select a seller:</label>
        <select id="seller-dropdown" name="seller">
          <option value="kalpa">Kalpa</option>
          <option value="sankap">Sankap</option>
          <option value="ajith">Ajith</option>
        </select>
    </div>
    <br></br>
    <div style={{marginTop:'5rem'}}>
      <DatePicker
        inline
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy HH:mm"
        minDate={new Date()}
        showTimeSelect
        timeIntervals={15}
        timeFormat="HH:mm"
        timeCaption="Time"
        disabledKeyboardNavigation
        className="calendar"
      /></div>
      {selectedDate && (
        <div className="DTshow">
          <p className="DTshowp">Date is {selectedDate.toLocaleDateString()}</p>
          <p className="DTshowp" >Time is {selectedDate.toLocaleTimeString()}</p>
         {/*<button onClick={handleConfirm} className="button">
            Submit
          </button>*/ } 
        </div>
      )}
    </div>

{/*method select*/}
    <div className="down">
      <h4>Select Platform</h4>
      <br></br>
      <p>After you select the Platform, the meeting will be created.</p>
      <div className="method-container">
        <div className={`method ${selectedMethod === 'zoom' ? 'selected' : ''}`} onClick={() => handleMethodSelection('zoom')}>                       {/*used to interpolate variables, expressions, or functions within the template literal, allowing you to create dynamic content */}
          <div className="option-image-container">
            <img src={ZoomImage} alt="zoom" />
          </div>
          <span>Zoom</span>
        </div>
        <div className={`method ${selectedMethod === 'ms-team' ? 'selected' : ''}`} onClick={() => handleMethodSelection('ms-team')}>
        <div className="option-image-container">
            <img src={teams} alt="Gmeet" />
          </div>
          <span>MS Team</span>
        </div>
        <div className={`method ${selectedMethod === 'meeting' ? 'selected' : ''}`} onClick={() => handleMethodSelection('meeting')}>
          <div className="option-image-container">
            <img src={GmeetImage} alt="Gmeet" />
          </div>
          <span>Meeting</span>
        </div>
        <div className={`method ${selectedMethod === 'physical-meeting' ? 'selected' : ''}`} onClick={() => handleMethodSelection('physical-meeting')}>
        <div className="option-image-container">
            <img src={physicalMeeting} alt="phy mee" />
          </div>
          <span>Physical Meeting</span>
        </div>
      </div>
      <br /> <br />
      {selectedDate && selectedMethod && (
  <div>
    <button className="button" onClick={handleArrangeMeeting}>
      Arrange Meeting
    </button>
    <br/><br/>
    {showReasonField && (
      
      <div className="reason">
        <h1>Cancel the meeting</h1>
        <input
          type="text"
          placeholder="Reason for cancellation"
          className="reason-field"
          value={reason}
          onChange={(event) => setReason(event.target.value)}
        />
        <br/><br/><br/>
        <button className="button" onClick={() => console.log(reason)}>
          Submit
        </button>
      </div>
    )}
  </div>
)}


    </div>

    
     </div></>
  );
}

export default RequestMeetingHome;

/*
 <label htmlFor="seller-select">Select seller:</label>

<select id="seller-select" value={selectedSeller} onChange={handleSellerChange}>
{sellers.map((seller) => (
  <option key={seller} value={seller}>
    {seller}
  </option>
))}
</select>







  const handleSellerChange = (event) => {
    setSelectedSeller(event.target.value);
    setSelectedDate(null);
  };

  */