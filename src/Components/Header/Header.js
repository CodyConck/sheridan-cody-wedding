import React from 'react';

const Header = () => {
  return (
    <header>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: "url('https://wallpapercave.com/wp/wp4100964.jpg')"
        }}
      >
        <div className="mask">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3 header-letters">Sheridan</h1>
              <h4 className="mb-3 header-letters">and</h4>
              <h1 className="mb-3 header-letters">Cody</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
