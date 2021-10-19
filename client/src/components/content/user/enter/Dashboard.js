import React from 'react';
import { getUser, removeUserSession } from 'D:/Users/User/Desktop/תכנות שנה ב/Project/final-project/client/src/utils/Common.js';
 
function Dashboard(props) {
  const user = getUser();
 
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }
 
  return (
    <div>
      Welcome {user.name}!<br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}
 
export default Dashboard;