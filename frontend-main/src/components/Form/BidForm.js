import React from 'react'

export default function BidForm() {
  return (
    <div>
        
        <form method='get'>
        <table border="0" >
          <caption>Bid Details</caption>
          <tr>
          <th>Base Value (LKR)</th>
            <td>
              <input type="number" className='text'/>
            </td>
          </tr>
          <tr>
            <th>Bid Time Duration</th>
            <td><input type="time" className='text' required/></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="reset" name="Cancel" value="Cancel" className='cancel'/>
              <input type="submit" name="Submit" value="Submit" className='submit'/>
            </td>
          </tr>
        </table>
      </form>
    </div>
  )
}
