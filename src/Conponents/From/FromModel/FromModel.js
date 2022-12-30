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
          <div className="modal-box text-gray-700 relative bg-black">
        
            <label
              htmlFor="login"
        
            >
              ✕
            </label>
      
            {isModal && (
              <>
                <Login setIsModal={setIsModal} isModal={isModal} />
              </>
            )}
      
            {!isModal && (
              <>
              <Register setIsModal={setIsModal} isModal={isModal} ></Register>
              </>
            )}
          </div>
        </div>
      </div>
    </>
    );
};

export default FromModel;