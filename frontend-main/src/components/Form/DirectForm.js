import React from 'react'

export default function DirectForm() {
  return (
    <div>
        <form method='get'>
        <table border="0" className='frm'>
          <caption>Direct Selling Details</caption>
          <tr>
          <th>Unit Price (LKR)</th>
            <td>
              <input type="number" className='text'/>
            </td>
          </tr>
          <tr>
            <th>Quantity</th>
            <td><input type="number" className='text' required/></td>
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
