import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
      <>
          <h1>NotFound</h1>
          <h3>
              Quay lại :
              <button>
                    <Link to="/">Home Page</Link>
              </button>
          </h3>
      </>
  );
}

export default NotFound