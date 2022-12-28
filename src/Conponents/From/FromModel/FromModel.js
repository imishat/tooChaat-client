import React, { useState } from 'react';
import Login from '../Login/Login';

import Register from '../Register';


const FromModel = () => {
    const [isModal, setIsModal] = useState(true);
    console.log(isModal)
    return (
        <>
      <div>
        <input type="checkbox" id="login" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box text-gray-700 relative">
            {/* max-h-[95%] max-w-5xl */}
            <label
              htmlFor="login"
              className="btn btn-sm btn-circle absolute right-2 top-2"
              // onClick={() => setIsModal(true)}
            >
              ✕
            </label>
            {/*  */}
            {isModal && (
              <>
                <Login setIsModal={setIsModal} isModal={isModal} />
              </>
            )}
            {/*  */}
            {!isModal && (
              <>
              <Register></Register>
              </>
            )}
          </div>
        </div>
      </div>
    </>
    );
};

export default FromModel;