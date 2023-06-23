import React, { useState } from 'react';

function Header() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="headerAvantConn">
      <div className="logo">
        <img src="./images/logo.jpg" alt="" />
      </div>
      <div className="middleNav" id="middleNav">
        <a href="#">Home</a>
        <a href="#">Courses</a>
        <a href="#">Language</a>
        <a href="#">Documentation</a>
        <a href="#">About Us</a>
      </div>
      <div className="btns">
        <img
          src="./images/Profile.png"
          alt=""
          style={{ width: '50px', marginTop: '-0.4rem' }}
          height="50px"
        />
        <div className="showBtn" id="showBtn" onClick={toggleSidebar}>
          <img src="bars.png" alt="" />
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      {showSidebar && (
        <div className="sideBar" id="sideBar">
          <button className="closeBtn" id="closeBtn" onClick={toggleSidebar}>
            X
          </button>

          <a href="#">Home</a>
          <a href="#">Courses</a>
          <a href="#">Language</a>
          <a href="#">Documentation</a>
          <a href="#">About Us</a>
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <br /><br /><br /><br /><br /><br /><br /><br />
      {/* Le reste de votre contenu */}
    </>
  );
}

export default App;