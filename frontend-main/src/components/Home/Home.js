import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>BudjetPos</h1>
      <table>
        <tr>
          <td>
            <Link to="/myprofile" className='profile'>My Profile</Link>
            <Link to="/history" className='history'>History</Link>
          </td>
          <td>
            <Link to="/myprofile" className='profile'>My Profile</Link>
            <Link to="/history" className='history'>History</Link>
          </td>
        </tr>
      </table>
    </div>
  );
}

