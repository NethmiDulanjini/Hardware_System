import React, { useState } from 'react'
import './Form.css'
import './Button/Button.css'
import BidForm from './BidForm'
import DirectForm from './DirectForm'

export default function FormBid() {
  const [showBidForm, setShowBidForm] = useState(false);
  const [showDirectForm, setShowDirectForm] = useState(false);
  const [photos, setPhotos] = useState([]);

  const handleYesClick = () => {
    setShowBidForm(true);
    setShowDirectForm(false);
  };

  const handleNoClick = () => {
    setShowBidForm(false);
    setShowDirectForm(true);
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    // Limit the number of photos to 5
    if (selectedFiles.length > 5) {
      alert('You can upload up to 5 photos only');
      return;
    }

    // Append new photos to the existing photos array
    setPhotos([...photos, ...selectedFiles]);
  };

  return (
    <div className='bg'>
        <form method='get' id='productform'>
        <table border="0" className='frm'>
          <caption>Product Details</caption>
          <tr>
            <th>Product Name</th>
            <td> <input type="text" className='text' id="name" required/></td>
          </tr>
          <tr>
            <th>Product Category </th>
            <td>
              <select name="category" id="category" className='text' required>
                <option value="RAM">RAM</option>
                <option value="ROM">ROM</option>
                <option value="NIC">NIC</option>
                <option value="Printers">Printers</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>Description </th>
            <td><textarea className='text' id="description" required></textarea></td>
          </tr>
          <tr>
            <th>Insert Photos of product 
            </th>
            <td>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
              />
              {/* Display the selected photos */}
              <ul>
                {photos.map((photo, index) => (
                  <li key={index}>{photo.name}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <th>
              Do you want to bid your product?
            </th>
            <td>
              <input
                  type='button'
                  name='Yes'
                  value='Yes'
                  className='yes'
                  onClick={handleYesClick}
                />
                <input
                  type='button'
                  name='No'
                  value='No'
                  className='no'
                  onClick={handleNoClick}
                />
            </td>
          </tr>

          {showBidForm && (
            <tr>
              <td colSpan={2}>
                <BidForm />
              </td>
            </tr>
          )}
          {showDirectForm && (
            <tr>
              <td colSpan={2}>
                <DirectForm />
              </td>
            </tr>
          )}
        </table>
      </form>
    </div>
  )
}
