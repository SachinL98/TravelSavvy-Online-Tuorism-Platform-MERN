import React from 'react';

const NavigationBar = () => {
  return (
    <nav style={{ backgroundColor: '#ad006b' }}>
      <div className="container d-flex justify-content-between align-items-center py-3">
        <h1 className="text-white" style={{marginLeft: '100px', fontSize: '30px', fontWeight: 'bold'}}>Travel Savvy</h1>
        <div>
          <span className="text-white mr-3">sahan@gmail.com</span>
          <button className="btn  text-black" style={{ backgroundColor: 'yellow', marginRight: '40px' }}>Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
