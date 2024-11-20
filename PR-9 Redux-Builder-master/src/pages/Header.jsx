


import React from 'react';
import { SiGooglekeep } from 'react-icons/si';



const Header = () => {
  return (
    <div className="py-3 bg-warning">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-auto">
            <SiGooglekeep size={32} color="#ffffff" />
          </div>
          <div className="col">
            <h3 className="text-white mb-0 ms-2">GOOGLE KEEP</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
