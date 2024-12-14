import React, { useState } from 'react'; // Import useState from React
import './App.css';
import LogoutBtn from './components/LogoutBtn';
import LoginBtn from './components/LoginBtn';

 

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
   // Fix typo in variable name
   if(!isLoggedIn){
    return (
      <LoginBtn />
    )
   }
   return(
    <div>
      <h1>Welcome everyone</h1>
      <div>
        {isLoggedIn && <LogoutBtn />}
      </div>
    </div>
   )

  // return (
  //   <div>
  //     {isLoggedIn ? <LogoutBtn/>:<LoginBtn />}
  //   </div>
  // )
  // if (isLoggedIn) {
  //   return <LogoutBtn />;
  // } else {
  //   return <LoginBtn />;
  // }
}

export default App;
